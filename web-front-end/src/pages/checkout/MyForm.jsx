// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Checkout.css";

function MyForm({ billingInfo, handleInputChange }) {
  return (
    <form>
      <div className="row">
        <div className="col-md-12">
          <label className="name mb-2">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="full name"
            name="Name"
            value={billingInfo.Name}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="Email mb-2">E-mail *</label>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={billingInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <label className="phoneNumber mb-2">Phone Number *</label>
          <input
            type="text"
            className="form-control"
            placeholder="+210"
            name="phone"
            value={billingInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="mb-2" htmlFor="inputWilaya">
            Wilaya
          </label>
          <select
            className="form-control"
            id="inputWilaya"
            defaultValue=""
            name="wilaya"
            value={billingInfo.wilaya}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              {" "}
              Select Wilaya d'Alger{" "}
            </option>
            <option value="Adrar">Adrar</option>
            <option value="Chlef">Chlef</option>
            <option value="Laghouat">Laghouat</option>
            <option value="Oum El Bouaghi">Oum El Bouaghi</option>
            <option value="Batna">Batna</option>
            <option value="Béjaïa">Béjaïa</option>
            <option value="Biskra">Biskra</option>
            <option value="Béchar">Béchar</option>
            <option value="Blida">Blida</option>
            <option value="Bouira">Bouira</option>
            <option value="Tamanrasset">Tamanrasset</option>
            <option value="Tébessa">Tébessa</option>
            <option value="Tlemcen">Tlemcen</option>
            <option value="Tiaret">Tiaret</option>
            <option value="Tizi Ouzou">Tizi Ouzou</option>
            <option value="Alger">Alger</option>
            <option value="Djelfa">Djelfa</option>
            <option value="Jijel">Jijel</option>
            <option value="Sétif">Sétif</option>
            <option value="Saïda">Saïda</option>
            <option value="Skikda">Skikda</option>
            <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
            <option value="Annaba">Annaba</option>
            <option value="Guelma">Guelma</option>
            <option value="Constantine">Constantine</option>
            <option value="Médéa">Médéa</option>
            <option value="Mostaganem">Mostaganem</option>
            <option value="M'Sila">M'Sila</option>
            <option value="Mascara">Mascara</option>
            <option value="Ouargla">Ouargla</option>
            <option value="Oran">Oran</option>
            <option value="El Bayadh">El Bayadh</option>
            <option value="Illizi">Illizi</option>
            <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
            <option value="Boumerdès">Boumerdès</option>
            <option value="El Tarf">El Tarf</option>
            <option value="Tindouf">Tindouf</option>
            <option value="Tissemsilt">Tissemsilt</option>
            <option value="El Oued">El Oued</option>
            <option value="Khenchela">Khenchela</option>
            <option value="Souk Ahras">Souk Ahras</option>
            <option value="Tipaza">Tipaza</option>
            <option value="Mila">Mila</option>
            <option value="Aïn Defla">Aïn Defla</option>
            <option value="Naâma">Naâma</option>
            <option value="Aïn Témouchent">Aïn Témouchent</option>
            <option value="Ghardaïa">Ghardaïa</option>
            <option value="Relizane">Relizane</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="adress mb-2">Adresse *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your adresse"
            name="address"
            value={billingInfo.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
}
export default MyForm;
