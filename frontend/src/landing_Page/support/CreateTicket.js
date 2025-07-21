import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./createTicket.css";

function CreateTicket() {
    const sections = [
        {
            title: "Account Opening",
            icon: "bi-plus-circle",
            content: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
            ],
        },
        {
            title: "Your Zerodha Account",
            icon: "bi-person-circle",
            content: ["Login issues", "Profile update", "Segment activation"],
        },
        {
            title: "Kite",
            icon: "bi-bar-chart-line",
            content: ["Orders", "Positions", "Watchlist", "Charting"],
        },
        {
            title: "Funds",
            icon: "bi-currency-rupee",
            content: ["Add funds", "Withdraw funds", "Transaction status"],
        },
        {
            title: "Console",
            icon: "bi-cpu",
            content: ["Reports", "Tax P&L", "Portfolio", "Downloads"],
        },
        {
            title: "Coin",
            icon: "bi-clock-history",
            content: ["Mutual funds", "SIPs", "Switching platforms"],
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Accordion Section (Left Side) */}
                <div className="col-lg-8 col-10  col-sm-12">
                    <div className="accordion" id="ticketAccordion">
                        {sections.map((section, index) => {
                            const headingId = `heading${index}`;
                            const collapseId = `collapse${index}`;
                            return (
                                <div className="accordion-item mb-2" key={index}>
                                    <h2 className="accordion-header" id={headingId}>
                                        <button
                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`}
                                            aria-expanded={index === 0 ? "true" : "false"}
                                            aria-controls={collapseId}
                                        >
                                            <div
                                                className="me-3 d-flex justify-content-center align-items-center"
                                                style={{
                                                    width: "35px",
                                                    height: "35px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#f0f8ff",
                                                    border: "2px solid #007bff",
                                                }}
                                            >
                                                <i
                                                    className={`bi ${section.icon}`}
                                                    style={{ fontSize: "16px", color: "#007bff" }}
                                                ></i>
                                            </div>
                                            <strong>{section.title}</strong>
                                        </button>
                                    </h2>
                                    <div
                                        id={collapseId}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        aria-labelledby={headingId}
                                        data-bs-parent="#ticketAccordion"
                                    >
                                        <div className="accordion-body">
                                            <ul className="list-unstyled ps-3 mb-0 open-account">
                                                {section.content.map((item, i) => (
                                                    <li key={i}>
                                                        <a href="#">{`• ${item}`}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="col-lg-4 col-md-12">
                    <div className="side-container">
                        <ul>
                            <li> <a href=""> Quarterly Settlement of Funds - July 2025</a></li>
                            <li><a href=""> Exclusion of F&O contracts on 8 securities from August 29, 2025</a> </li>
                        </ul>

                    </div>
                    <div> 
                        <table className="table table-bordered support-table my-5"> 
                         <thead> 
                            <tr>
                                <th style={{backgroundColor: " rgb(203, 198, 198)"}} >
                                    Quick Links
                                </th>
                            </tr>

                            <tr className="bg-light style"> 
                                <td> <a href = "">1.Track account opening  </a></td>
                            </tr>
                            
                            <tr className="bg-light style"> 
                                <td> <a href = ""> 2. Track segment activation </a></td>
                            </tr>
                            <tr className="bg-light style"> 
                                <td> <a href = ""> 3. Intraday margins</a> </td>
                            </tr>
                            <tr className="bg-ligh style"> 
                                <td> <a href = "">  4. Kite user manual</a> </td>
                            </tr>

                         </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket

