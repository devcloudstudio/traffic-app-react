import Modal from '../../Modal/Modal';
import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from "../Loader"
import ls from 'localstorage-ttl'

const BrandChooser = (props) => {
  const { setModal, showHandler, onCancel, setHijackObjectBrand } = props

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const listsRef = useRef(new Array())
  const brands = useSelector((state) => state.brands) || []
  //const brands = api_brands;

  const brandSelected = (id) => {
    setHijackObjectBrand(id)
  }

  return (
    <Modal additionalStyle={{ maxHeight: '80%', overflow: 'scroll' }} show={true}>
      <h1 className="text--white brand-heading">Your Saved Brands</h1>
      <div className="cards" style={{ height: '50%' }}>

        {brands && brands.map((brand, index) => {

          return (
            <div className={`brand-card`}>  {/*CARD START */}
              <div className="card--body">
                <div className="brand-card-topbar justify-content-center">
                  <div>
                    <img src={brand.avatar} className="brand-img" />
                  </div>
                  <h3 className="text--white">{brand.name}</h3>
                </div>
                <p className="text--white brand-slogan">{brand.slogan}</p>
                <div className="brand-options">
                  <span className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={() => {
                    brandSelected(brand);
                    setModal("Hijack")
                    showHandler()
                  }}>Choose</span>
                </div>
              </div>
            </div>
          )
        })}
        {isLoading && <Loader />}
      </div>
    </Modal>
  )
}

export default BrandChooser;