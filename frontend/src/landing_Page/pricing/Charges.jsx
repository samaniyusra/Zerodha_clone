import "./Charges.css";
function Charges() {
  return (
    <div class="container  p-5">
      <h4 style={{ marginLeft: "60px" }}> Charges explained</h4>
      <div class="row p-5">
        <div class="col-lg-6 col-md-8 col-sm-12">
          <h6 className="mb-5">Securities/Commodities transaction tax</h6>
          <p>
            STT/CTT is charged by the government when transacting on the
            exchange. Charged on both buy and sell sides for equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading via Zerodha, STT/CTT can be seen in the brokerage tax
            charges.
          </p>

          <h6>Transaction/Turnover Charges</h6>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <h6>Call & Trade</h6>
          <p>
            ₹50 per order for orders placed through a dealer at Zerodha
            including auto square-off orders.
          </p>

          <h6>Stamp Charges</h6>
          <p>
            Stamp duty as per government norms and charged only on buy side.
          </p>

          <h6>NRI Brokerage Charges</h6>
          <ul>
            <li>₹200 per order for equity delivery trades.</li>
            <li>₹100 per executed order for NRO non-PIS accounts.</li>
          </ul>

          <h6>Account with Debit Balance</h6>
          <p>
            Interest of 0.05% per day will be charged if debit balance exceeds
            credit balance.
          </p>

          <h6>Charges for Investor Protection Fund Trust (IPFT)</h6>
          <ul>
            <li>Equity: ₹10 per crore</li>
            <li>Currency: ₹10 per crore</li>
          </ul>

          <h6>Margin Trading Facility (MTF)</h6>
          <ul>
            <li>Interest: 0.045% per day on funded amount</li>
            <li>Pledging charges: ₹20 per scrip + GST</li>
          </ul>
        </div>

        <div class="col-lg-6 col-md-8 col-sm-12">
          <h6>GST</h6>
          <p>18% on brokerage + SEBI + exchange + transaction charges.</p>

          <h6>SEBI Charges</h6>
          <p>₹10 per crore of turnover.</p>

          <h6>DP (Depository Participant) Charges</h6>
          <ul>
            <li>₹13.5 + 18% GST per scrip on sell side</li>
            <li>Demat request: ₹5 per certificate + ₹100 courier</li>
          </ul>

          <h6>Pledging Charges</h6>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h6>AMC (Account Maintenance Charges)</h6>
          <p>₹300 annually + GST for accounts with holdings above ₹10,000.</p>

          <h6>Corporate Action Charges</h6>
          <p>Buyback / takeover / delisting – applicable per request.</p>

          <h6>Off-market Transfer Charges</h6>
          <p>₹25 per transaction.</p>

          <h6>Physical CMR Request</h6>
          <p>₹100 + courier + 18% GST.</p>

          <h6>Payment Gateway Charges</h6>
          <p>₹9 + GST per fund transfer via netbanking/gateway.</p>

          <h6>Delayed Payment Charges</h6>
          <p>Interest of 0.05% per day on debit balance in trading account.</p>

          <h6>3-in-1 Account Charges</h6>
          <p>Charges: 0.06% per executed order.</p>
        </div>

        <div>
          <h6> Disclaimer</h6>
          <p>
            {" "}
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>

        <div className="mt-5">
          <h4 class="mb-4">Charges for account opening</h4>
          <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span class="free-badge">FREE</span>
                </td>
              </tr>
              <tr class="table-light">
                <td>Offline account</td>
                <td>
                  <span class="free-badge">FREE</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr class="table-light">
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5`">
          <h4 class="mb-4">Charges for optional value added services</h4>
          <table class="table table-bordered">
            <thead class="table-light">
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Billing Frequency</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr class="table-light">
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charges;
