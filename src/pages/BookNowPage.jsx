import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState, useRef } from 'react';
import { Toast, ToastContainer, Form } from 'react-bootstrap';

const StepFirst = ({step, toggleStep}) => {
  const formRef = useRef(null)
  const next = (event) => {

    event.preventDefault()
    event.stopPropagation()
    if (formRef.current) {
      const formIsValid = formRef.current.checkValidity()
      if (formIsValid) {
        toggleStep(2)
      } else {
        console.log('表单验证失败')
        formRef.current.classList.add('was-validated')
      }
    }
  }
  return step===1?(
    <div className="container text-left px-2">
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4">
            <div className="mx-0">
              <div className="d-flex flex-column justify-content-center pb-5">
                <h4 className="text-center">Book your room</h4>
                <h5 className="text-center pt-3 text-nowrap">Step 1</h5>
              </div>
              <form ref={formRef} className="d-flex justify-content-center" noValidate>
                <div className="mx-3">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Choose room type
                    </label>
                    <select className="form-select" id="validationCustom04" required>
                      <option value="1">Room type 1</option>
                      <option value="2">Room type 2</option>
                      <option value="3">Room type 3</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      How many people to stay
                    </label>
                    <select className="form-select" id="validationCustom04" required>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Please enter your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Text"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Please enter your phone number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Text"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Please enter your email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Text"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="datePicker" className="form-label">Check in date</label>
                    <input type="date" id="datePicker" className="form-control" required/>
                    <div className="invalid-feedback">
                      Please select
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="datePicker" className="form-label">Check out date</label>
                    <input type="date" id="datePicker" className="form-control" required/>
                    <div className="invalid-feedback">
                      Please select
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-center">
                      <button type="submit" className="w-100 btn btn-outline-primary btn-lg" onClick={(event)=>{next(event)}}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  ) : null
}

const StepSecond = ({step, toggleStep}) => {
  const formRef = useRef(null)
  const book = (event) => {
    debugger
    event.preventDefault()
    event.stopPropagation()
    if (formRef.current) {
      const formIsValid = formRef.current.checkValidity()
      if (formIsValid) {
        toggleStep(3)
      } else {
        console.log('表单验证失败')
        formRef.current.classList.add('was-validated')
      }
    }
  }
  return step===2?(
    <div className="container text-left px-2">
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4">
            <div className="mx-0">
              <div className="d-flex flex-column justify-content-center pb-5">
                <h4 className="text-center">Book your room</h4>
                <h5 className="text-center pt-3 text-nowrap">Step 2</h5>
              </div>
              <form ref={formRef} className="d-flex justify-content-center" noValidate>
                <div className="mx-3">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your credit card number
                    </label>
                    <input
                      type="credit"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Text"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Day/year to expire
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Number/Number"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Please enter the card secure number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Number"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Please enter your address
                    </label>
                    <input
                      type="address"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Text"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-center">
                      <button type="submit" className="w-100 btn btn-outline-primary btn-lg" onClick={(event)=>{book(event)}}>
                        Book the room
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  ) : null
}

const StepThree = ({step}) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/#');
  }
  return step===3?(
    <div className="container text-left px-2">
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4">
            <div className="mx-0">
              <div className="py-5">
                <h5 className="text-center py-5 ">
                  Great! You have successfully book room type 3.<br/>
                  Check in date: xxx<br/>
                  Check out date: xxx<br/>
                  Name: xxx<br/>
                  Number of people staying: xxx<br/>
                  we are looking forward to seeing you.
                </h5>
              </div>
              <form className="d-flex justify-content-center" onsubmit="return false">
                <div className="mx-3">
                  <div className="pt-2 pb-4">
                    <div className="text-center">
                      <button type="submit" className="w-100 btn btn-outline-primary btn-lg" onClick={()=>{goHome()}}>
                        Go back to home page
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  ) : null
}

const BookNowPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const toggleStep = (step) => {
    return setStep(step)
  }
  return (
    <>
      <StepFirst step={step} toggleStep={toggleStep}></StepFirst>
      <StepSecond step={step} toggleStep={toggleStep}></StepSecond>
      <StepThree step={step}></StepThree>
    </>
  );
}

export default withLayout(BookNowPage);
