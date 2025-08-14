import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spritePath = path.resolve(__dirname, '../public/icons-sprite.svg')
const outputPath = path.resolve(__dirname, '../src/common/types/Icon.types.ts')

const generateIcons = async () => {
  try {
    const svgContent = await fs.readFile(spritePath, 'utf-8')
    const regex = /<symbol[^>]*id="([^"]+)"/g

    const matches = [...svgContent.matchAll(regex)]
    const iconIds = matches.map((match) => match[1])

    if (iconIds.length === 0) {
      console.warn(
        `${colors.yellow}Warning: No icons found in the sprite. Type file will not be created.${colors.reset}`,
      )
      process.exit(0)
    }

    const tsContent = `
// ATTENTION: This file is generated automatically. Do not edit it manually.
// To update, run the script: pnpm generate-icons

export type IconIdType = (typeof iconIds)[number]

export const iconIds = [
  ${iconIds.map((id) => `'${id}'`).join(',\n  ')}
] as const
`

    await fs.writeFile(outputPath, tsContent.trim())
    console.log(`${colors.green}Icon types generated successfully: ${outputPath}${colors.reset}`)
  } catch (error) {
    console.error(`${colors.red}Error generating icon types:${colors.reset}`, error)
    process.exit(1)
  }
}

generateIcons()
