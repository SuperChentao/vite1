import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react';
import {Button, Modal, Image} from 'react-bootstrap';

const RoomsFeaturesPage = () => {
  const navigate = useNavigate();
  const [currImg, setCurrImg] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = (img) => {
    setCurrImg(img)
    setShow(true)
  };
  return (
    <>
      <div className="container text-left px-2">
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4">
            <div className="mx-5">
              <div className="d-flex justify-content-center pb-5">
                <ul>
                  <li><h5 className="my-0 py-1">Each cabin is equipped with TV, fridge, microwave, coffee and tea.</h5></li>
                  <li><h5 className="my-0 py-1">1 complimentary parking stall, near each cabin, for registered Guests.</h5></li>
                  <li><h5 className="my-0 py-1">Pet-free and smoke-free property, Cabins with evidence of pets or smoke of</h5></li>
                  <li><h5 className="my-0 py-1">any kind (tobacco, cannabis, vape products) will be subject to a penalty.</h5></li>
                  <li><h5 className="my-0 py-1">Complimentary Wi-Fi-Intermittent signal due to mountainous location.</h5></li>
                </ul>
              </div>
              <form className="d-flex justify-content-center" onsubmit="return false">
                <div className="mx-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    For how many people
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Number"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Min price
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Number"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Max price
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Number"
                  />
                </div>
                <div className="mx-1">
                  <label className="form-label">&nbsp;</label>
                  <div>
                    <button type="submit" className="btn btn-outline-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-center mt-5">
                <div
                  className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
                  style={{ width: "760px" }}
                >
                  <div className="col d-flex flex-column justify-content-center position-static">
                    <div className="p-4">
                      <h3 className="mb-0">Room type 1</h3>
                      <p className="card-text mb-auto">
                        2 queen beds, 1 sofa, 1 kitchen, 1 washroom
                        <br />
                        For 4 people maximum
                        <br />
                        300/night
                      </p>
                    </div>
                  </div>
                  <div
                    className="col d-none d-lg-block"
                    onClick={()=>handleShow('/1.jpg')}
                  >
                    <img src="/1.jpg" style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <div
                  className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
                  style={{ width: "760px" }}
                >
                  <div className="col d-flex flex-column justify-content-center position-static">
                    <div className="p-4">
                      <h3 className="mb-0">Room type 1</h3>
                      <p className="card-text mb-auto">
                        2 queen beds, 1 sofa, 1 kitchen, 1 washroom
                        <br />
                        For 4 people maximum
                        <br />
                        300/night
                      </p>
                    </div>
                  </div>
                  <div
                    className="col d-none d-lg-block"
                  >
                    <img src="/1.jpg" style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <div
                  className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
                  style={{ width: "760px" }}
                >
                  <div className="col d-flex flex-column justify-content-center position-static">
                    <div className="p-4">
                      <h3 className="mb-0">Room type 1</h3>
                      <p className="card-text mb-auto">
                        2 queen beds, 1 sofa, 1 kitchen, 1 washroom
                        <br />
                        For 4 people maximum
                        <br />
                        300/night
                      </p>
                    </div>
                  </div>
                  <div
                    className="col d-none d-lg-block"
                  >
                    <img src="/1.jpg" style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>预览</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={currImg} rounded style={{width:'100%'}}/>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={handleClose}>
            关闭
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withLayout(RoomsFeaturesPage);
