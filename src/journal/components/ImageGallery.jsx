import { useSelector } from 'react-redux'
import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = () => {

  const { active:note } = useSelector( state => state.journal)
  const { imageUrls } = note
  //console.log({imageUrls})
  // imageUrls.forEach(image => {
  //   console.log(image.url)
  // });
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
      {imageUrls?.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image.secure_url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image.secure_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    // <>
    // </>
  );
}