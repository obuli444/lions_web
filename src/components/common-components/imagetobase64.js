export default function Base64Convertion(selectedFile) {
  // const [convertedData, setConverterdata] = useState(null);
  const selectedfile = selectedFile;
  if (selectedfile.length > 0) {
    const [imageFile] = selectedfile;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      // console.log("base64:", srcData);
    };
    fileReader.readAsDataURL(imageFile);
  }
}
