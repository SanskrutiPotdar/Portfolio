const cleanName = (path) => {
  const fileName = path.split('/').pop()
  return decodeURIComponent(fileName.replace(/\.[^/.]+$/, ''))
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const bookModules = import.meta.glob('../assets/books/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const pdfModules = import.meta.glob('../assets/pdf/*.{pdf,PDF}', {
  eager: true,
  import: 'default'
})

const pdfImageModules = import.meta.glob('../assets/pdf/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const poetryImageModules = import.meta.glob('../assets/poetry/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const poetryPdfModules = import.meta.glob('../assets/poetry/*.{pdf,PDF}', {
  eager: true,
  import: 'default'
})

export const images = Object.entries(imageModules)
  .map(([path, src]) => ({
    src,
    path,
    filename: path.split('/').pop(),
    title: cleanName(path),
  }))
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

const amazonLinks = {
  "img1(1).jpg":
    "https://www.amazon.in/Steve-Jobs-Prashant-pitaliya/dp/B072KN1HGF/ref=sr_1_4?crid=3KNA9BN88WZ19&dib=eyJ2IjoiMSJ9.U-oUK4lYAqpV5zbYWmrb-G4yEbGj-umJKPgUk3Av6W6pYtlJXhInwT4TgE3hyPtINfIzhKqn3ejPnAfShRsH9fvIquUXRxFuklmhVjoW5p4.LD5hER58aIpyae-RmgFMwix5RrNSGDL9QhZy3bM3jnU&dib_tag=se&keywords=prashant+pitaliya&qid=1781251462&sprefix=prashant+pitaliy%2Caps%2C322&sr=8-4",

  "book2.jpg":
    "https://www.amazon.in/%E0%A4%86%E0%A4%AF-%E0%A4%9F%E0%A5%80-%E0%A4%AE%E0%A4%A7%E0%A5%80%E0%A4%B2-%E0%A4%85%E0%A4%A8%E0%A4%AD%E0%A4%BF%E0%A4%B7%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%A4-%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%9F-Anabhishikt-Publications/dp/B0FT3JC2VQ/ref=sr_1_3?crid=3KNA9BN88WZ19&dib=eyJ2IjoiMSJ9.U-oUK4lYAqpV5zbYWmrb-G4yEbGj-umJKPgUk3Av6W6pYtlJXhInwT4TgE3hyPtINfIzhKqn3ejPnAfShRsH9fvIquUXRxFuklmhVjoW5p4.LD5hER58aIpyae-RmgFMwix5RrNSGDL9QhZy3bM3jnU&dib_tag=se&keywords=prashant+pitaliya&qid=1781251462&sprefix=prashant+pitaliy%2Caps%2C322&sr=8-3",

  "book3.jpg":
    "https://www.amazon.in/%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%AA%E0%A5%8D%E0%A4%A8%E0%A4%AD%E0%A4%B0%E0%A4%BE%E0%A4%B0%E0%A5%80-%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%9A%E0%A4%B0%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%95-%E0%A4%AA%E0%A4%AC%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%B6%E0%A4%A8%E0%A5%8D%E0%A4%B8-Swapnabharari-Publications/dp/B0FS73NN52/ref=sr_1_1?crid=3KNA9BN88WZ19&dib=eyJ2IjoiMSJ9.U-oUK4lYAqpV5zbYWmrb-G4yEbGj-umJKPgUk3Av6W6pYtlJXhInwT4TgE3hyPtINfIzhKqn3ejPnAfShRsH9fvIquUXRxFuklmhVjoW5p4.LD5hER58aIpyae-RmgFMwix5RrNSGDL9QhZy3bM3jnU&dib_tag=se&keywords=prashant+pitaliya&qid=1781251462&sprefix=prashant+pitaliy%2Caps%2C322&sr=8-1",

  "book4.jpg":
    "https://www.amazon.in/Intelligent-Investor-Buffett-Prashant-pitaliya/dp/B0721SNGZZ/ref=sr_1_6?crid=3KNA9BN88WZ19&dib=eyJ2IjoiMSJ9.U-oUK4lYAqpV5zbYWmrb-G4yEbGj-umJKPgUk3Av6W6pYtlJXhInwT4TgE3hyPtINfIzhKqn3ejPnAfShRsH9fvIquUXRxFuklmhVjoW5p4.LD5hER58aIpyae-RmgFMwix5RrNSGDL9QhZy3bM3jnU&dib_tag=se&keywords=prashant+pitaliya&qid=1781251462&sprefix=prashant+pitaliy%2Caps%2C322&sr=8-6"
}

export const bookImages = Object.entries(bookModules)
  .map(([path, src]) => {
    const filename = path.split('/').pop()

    return {
      src,
      path,
      filename,
      title: cleanName(path),
      amazonLink: amazonLinks[filename] || null
    }
  })
  .sort((a, b) =>
    a.title.localeCompare(b.title, undefined, {
      sensitivity: 'base'
    })
  )

export const pdfs = Object.entries(pdfModules)
  .map(([path, src]) => ({
    src,
    path,
    filename: path.split('/').pop(),
    title: cleanName(path),
  }))
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

export const pdfImages = Object.entries(pdfImageModules)
  .map(([path, src]) => ({
    src,
    path,
    filename: path.split('/').pop(),
    title: cleanName(path),
    type: 'image',
  }))
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

export const poetryImages = Object.entries(poetryImageModules)
  .map(([path, src]) => ({
    src,
    path,
    filename: path.split('/').pop(),
    title: cleanName(path),
  }))
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

export const poetryPdfs = Object.entries(poetryPdfModules)
  .map(([path, src]) => ({
    src,
    path,
    filename: path.split('/').pop(),
    title: cleanName(path),
  }))
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))

// Dedicated profile image (exported directly for use in Hero/About)
export const profileImageSrc = Object.entries(imageModules)
  .find(([path]) => /(prashant|prahant)/i.test(path.split('/').pop()))?.[1] || null
