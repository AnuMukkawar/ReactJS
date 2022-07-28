import React from "react";

const pricingTable1 = (props) => {
  return (
    
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {props.type}
                </h5>
                <h6 className="card-price text-center">
                  {props.price}
                  <span className="period">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {props.type === "PLUS" || props.type === "PRO" ? (
                      <b>{props.user}</b>
                    ) : (
                      props.user
                    )}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {props.storage}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {props.projects1}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {props.access}
                  </li>
                  <li className={props.type === "FREE" ? "text-muted" : ""}>
                    <span className="fa-li">
                      <i
                        className={
                          props.type === "FREE"
                            ? "fas fa-times"
                            : "fas fa-check"
                        }
                      ></i>
                    </span>
                    {props.projects2}
                  </li>
                  <li className={props.type === "FREE" ? "text-muted" : ""}>
                    <span className="fa-li">
                      <i
                        className={
                          props.type === "FREE"
                            ? "fas fa-times"
                            : "fas fa-check"
                        }
                      ></i>
                    </span>
                    {props.support}
                  </li>
                  <li className={props.type === "FREE" ? "text-muted" : ""}>
                    <span className="fa-li">
                      <i
                        className={
                          props.type === "FREE"
                            ? "fas fa-times"
                            : "fas fa-check"
                        }
                      ></i>
                    </span>
                    {props.subdomain}
                  </li>
                  <li
                    className={
                      props.type === "FREE" || props.type === "PLUS"
                        ? "text-muted"
                        : ""
                    }
                  >
                    <span className="fa-li">
                      <i
                        className={
                          props.type === "FREE" || props.type === "PLUS"
                            ? "fas fa-times"
                            : "fas fa-check"
                        }
                      ></i>
                    </span>
                    {props.report}
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn btn-primary text-uppercase">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        
  );
};
export default pricingTable1;
