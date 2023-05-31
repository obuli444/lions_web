function Base64Convertion(selectedFile) {
  const selectedfile = selectedFile;
  if (selectedfile.length > 0) {
    const [imageFile] = selectedfile;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
    };
    fileReader.readAsDataURL(imageFile);
  }
}

export default Base64Convertion;