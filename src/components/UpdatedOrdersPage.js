import React from "react";

const UpdatedOrdersPage = () => {
  return (
    <div>
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-primary" id="exampleModalCenterTitle ">
              Order Edit/Update !
            </h5>

            <button
              type="button"
              class="close "
              data-dismiss="modal"
              aria-label="Close"
            >
              {" "}
              <span aria-hidden="true">
                <i class="i-Close-Window"></i>
              </span>{" "}
            </button>
          </div>

          <div class="modal-body">
            <div class="col-md-12 p-0">
              <div class=" card  mb-3">
                <div class="card-body">
                  <div class="row ">
                    <div class="col-md-12 row m-0  form-group ">
                      <label
                        for="proqty"
                        class="pl-1 col-sm-2 pb-0 col-form-label text-left"
                      >
                        Address
                      </label>
                      <label
                        name="address"
                        id="address"
                        class="form-control-rounded pl-1 pb-0 col-form-label text-left"
                      >
                        {" "}
                        Test Address
                        <br />
                        Test
                        <br />, Bareilly, Uttar Pradesh
                        <br />0
                      </label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 row m-0  form-group ">
                      <label
                        for="primaryno"
                        class="pl-1 pb-0 col-form-label text-left"
                      >
                        {" "}
                        Primary <i class="i-Telephone"></i>{" "}
                      </label>
                      <label
                        class="readonly form-control-rounded pl-1 pb-0 col-form-label"
                        value="XXXXX9050"
                        name="primaryno"
                        id="primaryno"
                      >
                        <a href="tel:01244425861,769028">01244425861,769028</a>
                      </label>
                    </div>
                  </div>
                  <div class="row m-0 ">
                    <div class="col-md-12 p-0">
                      <div class="card mt-3 mb-2">
                        <div class="card-body">
                          <div class="col-md-12 p-0 mt-lg-2 ">
                            <div class="table-responsive">
                              <table
                                id="productstbl"
                                class=" p-0 display table data table-striped table-bordered  table-hover "
                              >
                                <thead>
                                  <tr role="row">
                                    <th> Product Name</th>
                                    <th> SKU</th>
                                    <th> Qty </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {" "}
                                  <tr role="row" class="odd">
                                    <td>
                                      Aloe Vera (60 Capsules) - 2 Bottles Pack
                                    </td>

                                    <td>NFINAL02</td>

                                    <td>1</td>
                                  </tr>
                                  <tr
                                    role="row"
                                    class="odd"
                                    style={{
                                      backgroundColor: "rgba(0,0,0,.05)",
                                    }}
                                  >
                                    <td></td>

                                    <td>
                                      <strong style={{ fontSize: "12px" }}>
                                        Payable Amount
                                      </strong>
                                    </td>

                                    <td>
                                      <strong style={{ fontSize: "12px" }}>
                                        199
                                      </strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* <!--   End-user-profile-->  */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    name="status_bolt_order_id"
                    id="status_bolt_order_id6390141"
                    value="6390141"
                  />
                  <input
                    type="hidden"
                    name="allocation_id"
                    id="allocation_id"
                    value=""
                  />

                  <input
                    type="hidden"
                    name="status_user_id"
                    id="status_user_id6390141"
                    value="851"
                  />

                  <div class="col-md-12 p-0 row m-0  form-group">
                    <label
                      for="generateinvoice"
                      class="pl-1 pb-0 col-md-2 col-form-label"
                    >
                      {" "}
                      Generate Invoice
                    </label>

                    <div class="col-md-6 p-0">
                      {" "}
                      <a
                        href="pdf_format/html2pdf/examples/about2.php?order_id=110063901415292"
                        class="badge badge-pill float-left p-2 mr-2 badge-outline-success col-sm-12 text-success text-11  "
                        target="_blank"
                      >
                        <i class="i-Download"></i> Invoice
                      </a>
                    </div>
                  </div>
                </div>

                <div class="row m-0">
                  {" "}
                  <div class="col-md-6 row m-0 form-group ">
                    <label
                      for="paymentmode"
                      class="pl-1 col-md-4 pb-0 col-form-label"
                    >
                      {" "}
                      Payment Mode
                    </label>

                    <select
                      class="form-control col-md-8  form-control-rounded"
                      name="payment_mode"
                      id="payment_mode6390141"
                    >
                      <option value="1">Cash</option>

                      <option value="21">Paytm</option>

                      <option value="31">Phone Pay</option>

                      <option value="41">Google Pay</option>

                      <option value="51">Amazone Pay</option>
                    </select>
                  </div>
                  <div class="col-md-6 row m-0  form-group ">
                    <label
                      for="paymentmode"
                      class="pl-1 col-md-4 pb-0 col-form-label"
                    >
                      {" "}
                      Order Status
                    </label>
                    <select
                      class="form-control col-md-8  form-control-rounded"
                      name="order_status"
                      id="order_status6390141"
                      onchange="showReason(this.value,6390141);"
                    >
                      <option> - Select -</option>
                      <option value="19">Delivered </option>
                      <option value="20">Undelivered</option>
                    </select>
                  </div>
                </div>

                <div class="row m-0 mb-2">
                  <div class="col-md-6 row m-0 form-group  ">
                    <div class="col-md-4 pl-0  col-sm-4">
                      <label for="remark" class="pl-1 pb-0 col-form-label">
                        Remark
                      </label>
                    </div>
                    <div class="col-md-8 col-sm-8 p-0">
                      <textarea
                        name="remark"
                        id="remark6390141"
                        class="form-control  form-control-rounded"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6 row m-0 form-group">
                    <div class="col-md-4 pl-0  col-sm-4">
                      <label
                        for="remark"
                        class="pl-1 pb-0 col-form-label"
                      ></label>
                    </div>

                    <div
                      class="col-md-8 col-sm-8 p-0"
                      id="undelivered_reason6390141"
                    >
                      <select
                        class="form-control form-control-rounded"
                        name="reason"
                        id="reason6390141"
                      >
                        <option value="">---Select Reason---</option>
                        <option value="Customer Not Available at Address">
                          Customer Not Available at Address
                        </option>
                        <option value="Customer Refused To Accept">
                          Customer Refused To Accept
                        </option>
                        <option value="Incomplete Address">
                          Incomplete Address
                        </option>
                        <option value="ODA (Out of Delivery Area)">
                          ODA (Out of Delivery Area)
                        </option>
                        <option value="Customer Out of Station">
                          Customer Out of Station
                        </option>
                        <option value="Future Delivery">Future Delivery</option>
                        <option value="COD Not Ready">COD Not Ready</option>
                        <option value="Order Already Cancelled">
                          Order Already Cancelled
                        </option>
                        <option value="Not Connected (Ringing, Switched Off, Not Reachable)">
                          Not Connected (Ringing, Switched Off, Not Reachable)
                        </option>
                        <option value="Product Mismatch">
                          Product Mismatch
                        </option>
                        <option value="Amount Mismatch">Amount Mismatch</option>
                        <option value="Fake Order">Fake Order</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!--   End-user-profile-->  */}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class=" float-right ml-auto btn btn-primary"
              onclick="updateStatus(6390141,1310021);"
            >
              Update
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default UpdatedOrdersPage;
