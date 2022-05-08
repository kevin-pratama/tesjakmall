import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const DeliveryPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  
    let price = 500000;
  
    let fee = 5900;
  
    const total = price + fee;
  
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(!checked);
    };
    return (
      <div className="container">
        <Link className="back" to="/">
          <p>Back To Cart</p>
        </Link>
        <div className="grid">
          <div className="side-left">
            <div className="header-form">
              <h1>Delivery Detail</h1>
              <div className="checkbox">
                <input type="checkbox" onChange={handleChange} />
                <p>send as Dropshipper</p>
              </div>
            </div>
  
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <input 
                type="email" {...register("Email", {required:true})} 
                placeholder="Email" />
              <input
                {...register("Dropshipper Name")}
                placeholder="Dropshipper Name"
                disabled={checked ? false : true}
              />
              <input 
                type="tell"{...register("Phone Number", {required:true})} placeholder="Phone Number" />
              <input
                {...register("Dropshipper Phone Number")}
                placeholder="Dropshipper Phone Number"
                disabled={checked ? false : true}
              />
              <input
                {...register("Delivery Address", {required:true})}
                placeholder="Delivery Address"
              />
              <input type="submit"/>
          </div>
          <div className="diveder" />
          <div className="side-right">
            <div className="header-summary">
              <h2>Summary</h2>
              <p>10 items purchased</p>
            </div>
            <div className="summary-content">
              <div className="bottom">
                <div className="bottom-child">
                  <p>Cost of goods</p>
                  <p>{checked ? "Dropshipping Fee" : []}</p>
                </div>
                <div className="bottom-price">
                  <p>
                    {price.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>
                    {checked
                      ? fee.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : []}
                  </p>
                </div>
              </div>
  
              <div className="bottom">
                <h2>Total</h2>
                <h2>
                  {checked
                    ? total.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                </h2>
              </div>
              <Link to={checked ? "/payment1" : "/payment"}>
                <button className="btn">Continue to Payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    );
  };

export default DeliveryPage