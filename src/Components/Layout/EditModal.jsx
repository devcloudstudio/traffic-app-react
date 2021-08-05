import React,{useState, useEffect} from "react"
import Modal from "../Modal/Modal"


const EditModal = (props)=>{
  const [value,setValue] = useState({
    width:"",
    height:"",
    filter:""
  })
  const changeHandler = (e)=>{
     const {value,name} = e.target
    setValue(()=>({
      ...value,
      [name]:value
    }))
  }


  useEffect(() => {
    callDom()
  }, [callDom])


	return(
      <Modal {...props} rightBtnContent="Save" >

         <div className="" style={{height:"60vh",overflowY:"scroll"}}>
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Edit  Image</h1>
              {/*<span className="text--secondary py-2">Copy or share the link to get free traffic</span>*/}
              
             </div>

               <input type="file" id="upload-file" />
            
            
                <canvas id="canvas" style={styles.canvas}></canvas>
             

            <div className="btn--group mt-2" style={{flexDirection:"row",flexWrap:"wrap"}}>
              <div class="box">
               <div className="value">Brightness </div>
               <div class="range">
                 <input type="range" min="0" max="100" id="brightness"  name="height"/>
                </div>
              </div>

             <div class="box">
               <div className="value">Conrast</div>
               <div class="range">
                 <input type="range" min="0" max="100"  id="contrast" name="height"/>
                </div>
              </div>

               <div class="box">
               <div className="value">Saturation </div>
               <div class="range">
                 <input type="range" min="0" max="100"  id="saturation" name="height"/>
                </div>
              </div>

              <div class="box">
               <div className="value">Vibrance </div>
               <div class="range">
                 <input type="range" min="0" max="100" id="vibrance" name="width" />
                </div>
              </div>
 
            </div>

            <div className="btn--group mt-2" style={{flexDirection:"row",flexWrap:"wrap"}}>
              <div class="box" style={{maxWidth:"100%"}}>
               <div className="value">Filter </div>
               <div class="range" style={{maxWidth:"100%"}}>
                 <select className="text--primary selectBox filter-selectBox" id="filters">
                   <option value="Select Source">Select Source</option>
                   <option value="vintage">Vintage</option>
                   <option value="lomo">Lomo</option>
                   <option value="clarity">Clarity</option>
                   <option value="sincity">Sincity</option>
                   <option value="crossprocess">Cross Process</option>
                   <option value="pinhole">Pin hole</option>
                   <option value="nostalgia">Nostalgia</option>
                 </select>
                </div>
                <div class="range" style={{maxWidth:"100%"}}>
                 <input type="range" min="0" max="100" value={value.filter} onChange={changeHandler} name="filter"  />
                </div>
              </div>
            </div>
         </div>
      </Modal>
	)
}

const styles = {
    canvas: {
      "display":"block",
        "margin": "0 auto",
        "background": "#ececec",
        "maxWidth": "100%",
        "maxHeight":"400px"
    }
}

function callDom(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const bright = document.getElementById('brightness')
    const contrast = document.getElementById('contrast')
    const saturation = document.getElementById('saturation')
    const vibrance = document.getElementById('vibrance')

      let img = new Image()
      let fileName = ''
       const uploadFile = document.getElementById('upload-file')

       uploadFile.addEventListener('change', e => {
         const file = document.getElementById('upload-file').files[0]

         const reader = new FileReader()
         if (file){
           fileName = file.name

           // File to URL
           reader.readAsDataURL(file)

           // Add to canvas
           reader.addEventListener('load', () => {
             img = new Image()
             img.src = reader.result

             // load img to canvas
             img.onload = function(){
               canvas.width = img.width
               canvas.height = img.height
               ctx.drawImage(img, 0, 0, img.width, img.height)
               canvas.removeAttribute('data-caman-id')
             }
           }, false)
         }
       })


      bright.addEventListener('change', function(){
            if (this.value > 10){
               window.Caman('#canvas', img, function () {
                this.brightness(5).render()

            })
            }
            if (this.value < 10){
               window.Caman('#canvas', img, function () {
                this.brightness(-5).render()

            })
            }
      })

      contrast.addEventListener('change', function(){
           if (this.value > 10) {

            window.Caman('#canvas', img, function () {
                this.contrast(5).render()
            })
        } 
        if (this.value < 10){
             window.Caman('#canvas', img, function () {
                this.contrast(-5).render()

            })
        }
      })


      saturation.addEventListener('change', function(){
        if (this.value > 10){
           window.Caman('#canvas', img, function () {
                this.saturation(15).render()
            })
        }
        if (this.value < 10){
           window.Caman('#canvas', img, function () {
                this.saturation(-15).render()

            })
        }
      })


      vibrance.addEventListener('change', function(){
        if(this.value > 10){
            window.Caman('#canvas', img, function () {
                this.vibrance(15).render()
            })
        }
        if (this.value < 10){
           window.Caman('#canvas', img, function () {
                this.vibrance(-15).render()

            })
        }
      })


       const filters = document.getElementById('filters')
     
       filters.addEventListener('change', function(e){
         if (e.target.value === 'vintage'){
           window.Caman('#canvas', img, function(){
             this.vintage().render()
           })
         }else if (e.target.value === 'lomo'){
           window.Caman('#canvas', img, function () {
            this.lomo().render()

        })
         }else if (e.target.value === 'clarity'){
             window.Caman('#canvas', img, function () {
            this.clarity().render()

        }) 
         }else if (e.target.valeu === 'sincity'){
            window.Caman('#canvas', img, function () {
            this.sinCity().render()

        })
         }else if(e.target.value === 'crossprocess'){
            window.Caman('#canvas', img, function () {
            this.crossProcess().render()

        })
         }else if (e.target.value === 'pinhole'){
              window.Caman('#canvas', img, function () {
            this.pinhole().render()

        })
         }else if (e.target.value === 'nostalgia'){
            window.Caman('#canvas', img, function () {
            this.nostalgia().render()

        })
         }else{
           alert('please select filter first')
         }
       })


      

}

export default EditModal