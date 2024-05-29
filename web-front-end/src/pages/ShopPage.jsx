import React from "react";
import HomeProductsProduct from "./HomeProductsProduct";

export default function ShopPage() {
  return (
    <div className="ShopPage container-fluid " style={{ paddingTop: "110px" }}>
      <div className="row  ">
        <div className="col m-auto text-center ">
          <h3 className="text-secondary">SHOP</h3>
        </div>
        <div className="col m-auto  text-center ">
          <p>shown  1–20 of 78 result</p>
        </div>
        <div className="col text-center ">
          <form className="d-block">
            <select name="orderby" className="">
              <option value="popularity">Sort by popularity</option>
              <option value="date" selected="selected">
                Tri du plus récent au plus ancien
              </option>
              <option value="price">Tri par tarif croissant</option>
              <option value="price-desc">Tri par tarif décroissant</option>
              <input type="hidden" name="paged" value={1} />
            </select>
          </form>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-2 ">
            <div className="card" style={{ marginTop: "24px" }}>
              <article className="card-group-item">
                <header className="card-header px-5">
                  <h6 className="card-title">Brands </h6>
                </header>

                <form action="" className=" ">
                  <label className="form-check  " style={{ marginTop: "0px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                </form>
              </article>
              <article className="card-group-item">
                <header className="card-header px-5">
                  <h6 className="card-title">Brands </h6>
                </header>

                <form action="" className=" ">
                  <label className="form-check  " style={{ marginTop: "0px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                </form>
              </article>
              <article className="card-group-item">
                <header className="card-header px-5">
                  <h6 className="card-title">Brands </h6>
                </header>

                <form action="" className=" ">
                  <label className="form-check  " style={{ marginTop: "0px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">HP</span>
                  </label>
                </form>
              </article>
            </div>
          </div>
          <div className="col ">
            <div className="row">
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
              <div className="col-sm-3 ">
                <HomeProductsProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
