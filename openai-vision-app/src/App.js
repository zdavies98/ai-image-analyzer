import { useState } from "react"

const App = () => {
  const [ image, setImage ] = useState(null)

  const uploadImage = async (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setImage(e.target.files[0])
    e.target.value = null
    try {
        const options = {
          method: 'POST',
          body: formData
        }
        const response = await fetch('http://localhost:8000/upload', options)
        const data = response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className="app">
      {image && <img src={URL.createObjectURL(image)}/>}
      <label htmlFor="files">Upload an image</label>
      <input onChange={uploadImage} id="files" accept="image/*" type="file" hidden />
    </div>
  );
}

export default App;
