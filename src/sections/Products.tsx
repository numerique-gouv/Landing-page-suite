import { ContentSection } from '@/components/ContentSection'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { PRODUCTS } from '@/utils/products'

const PRODUCTS_GRID = [
  'Messagerie',
  'Tchap',
  'Resana',
  'Grist',
  'France Transfert',
  'Webconf',
  'Webinaire',
  'AudioConf',
  'Note Pad',
  'Docs',
]

export const Products = () => {
  return (
    <ContentSection>
      <div className="flex flex-wrap items-center justify-center xl:grid grid-cols-2 xl:grid-cols-5 gap-8">
        {PRODUCTS_GRID.map((name) => {
          // @ts-ignore
          const hasLink = PRODUCTS[name]?.url
          const logo = PRODUCTS[name]?.logo
          const content = (
            <div
              key={name}
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-between bg-grey-6 rounded p-2 md:p-4"
            >
              <div className="flex-grow flex flex-col items-center justify-center overflow-hidden">
                <Image
                  className="w-9/12 md:w-auto"
                  src={logo}
                  alt={`Logo ${name}`}
                />
              </div>

              <h4 className="text-sm md:text-lg md:whitespace-nowrap">
                {name}
              </h4>
            </div>
          )

          return (
            <a key={name} href={hasLink} target="_blank">
              {content}
            </a>
          )
        })}
      </div>
      <Button href="/products" variant="outline">
        Je découvre les produits de La Suite
      </Button>
    </ContentSection>
  )
}
