import React from "react";
import "./Checkout.css";

function MyForm(){
return(
  <form>
  <h3>Order Information</h3>
  <div className="row">
    <div className="col-md-6">
      <label className="name mb-2">Name</label>
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col-md-6">
      <label className="LastName mb-2">LastName</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <label className="Email mb-2">E-mail *</label>
      <input type="text" className="form-control" placeholder="email" />
    </div>
  </div>
  
  <div className="row">
    <div className="col-md-12">
      <label className="phoneNumber mb-2">Phone Number *</label>
      <input type="text" className="form-control" placeholder="+210" />

    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <label className="mb-2" htmlFor="inputWilaya">Wilaya</label>
      <select className="form-control" id="inputWilaya" defaultValue="">
        <option value=""  disabled> Select Wilaya d'Alger </option>
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
      <input type="text" className="form-control" placeholder="Your adresse" />
    </div>
  </div>
  {/* Add other form fields for last name, address, state, phone number, email */}
</form>
);
}
export default MyForm;