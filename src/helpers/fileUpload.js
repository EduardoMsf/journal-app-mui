export const fileUpload = async( file ) => {

  if( !file ) throw new Error('No tenemos ningun archivo a subir ')
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dheyjds01/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'journal-mui')
  formData.append('file', file)

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })

    if( !resp.ok ) throw new Error('No se pudo subir imagen')
    console.log(resp)
    
    const cloudResp = await resp.json()
    console.log({cloudResp})

    return cloudResp
  } catch (error) {
    console.log(error)
    throw Error(error.message)
  }
  
}