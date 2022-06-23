import React from "react";
import { PropTypes } from "@mui/material";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { getAllArtefacts, updateArtefact } from "./Axios/ArtefactAPI";

function ArtefactPage () {

    const params = useParams();
    const [artefact, setArtefact] = useState({});
    const [artefacts, setArtefacts] = useState([]);

    useEffect(() => {
        getAllArtefacts(setArtefacts);
        // setArtefact(artefacts.filter(artefact => artefact.id === params.id))
    })

    const [country, setCountry] = useState('Afghanistan');

    const [artefactName, setArtefactName] = useState('');
    const [creator, setCreator] = useState('');

    const [date, setDate] = useState('');

    const handleNameChange = event => setArtefactName(event.target.value);
    const handleCreatorChange = event => setCreator(event.target.value);
    const handleDateChange = event => setDate(event.target.value);
    // const handleIdChange = event => setId(event.target.value);
    const handleSelect = event =>
    setCountry(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        updateArtefact(setArtefact, artefactName, creator, date, country, 1);
    }


    return(
        <>
        <div className = "artefact-page">
            <h1>{artefact.name}</h1>
        </div>
        <div>
            <p>Creator: {artefact.creator}</p>
            <p>Date: {artefact.date}</p>
            <p>Country: {artefact.country}</p>
        </div>
        <div class='update-artefact-form'>
      <form onSubmit = {handleSubmit}>
        
        <label>
          Artefact Name:
          <input type = "text" name = "name" onChange = {handleNameChange} />
        </label>
        
        <label>
            Creator:
            <input type = "text" name = "creator" onChange = {handleCreatorChange} />
        </label>
        <label>
            Date:
            <input type = "text" name = "date" onChange = {handleDateChange} />
        </label>
        {/* <label>
            ID:
            <input type = "text" name = "id" onChange = {handleIdChange} />
        </label> */}
       
        
<select name = "country" onChange = {handleSelect}>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="AntiguaAndDeps">AntiguaAndDeps</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia">Bosnia</option>
<option value="Herzegovina">Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina">Burkina</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="CapeVerde">CapeVerde</option>
<option value="CentralAfricanRep">CentralAfricanRep</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="CostaRica">CostaRica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="CzechRepublic">CzechRepublic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="DominicanRepublic">DominicanRepublic</option>
<option value="EastTimor">EastTimor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="ElSalvador">ElSalvador</option>
<option value="EquatorialGuinea">EquatorialGuinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="GuineaBissau">GuineaBissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="IvoryCoast">IvoryCoast</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="KoreaNorth">KoreaNorth</option>
<option value="KoreaSouth">KoreaSouth</option>
<option value="Kosovo">Kosovo</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macedonia">Macedonia</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option><option value="Malta">Malta</option>
<option value="MarshallIslands">MarshallIslands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="NewZealand">NewZealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="PapuaNewGuinea">PapuaNewGuinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="RussianFederation">RussianFederation</option>
<option value="Rwanda">Rwanda</option>
<option value="StKittsandNevis">StKittsandNevis</option>
<option value="StLucia">StLucia</option>
<option value="SaintVincentAndtheGrenadines">SaintVincentAndtheGrenadines</option>
<option value="Samoa">Samoa</option>
<option value="SanMarino">SanMarino</option>
<option value="SaoTomeAndPrincipe">SaoTomeAndPrincipe</option>
<option value="SaudiArabia">SaudiArabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="SierraLeone">SierraLeone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="SolomonIslands">SolomonIslands</option>
<option value="Somalia">Somalia</option>
<option value="SouthAfrica">SouthAfrica</option>
<option value="SouthSudan">SouthSudan</option>
<option value="Spain">Spain</option>
<option value="SriLanka">SriLanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="TrinidadAndTobago">TrinidadAndTobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="UnitedArabEmirates">UnitedArabEmirates</option>
<option value="UnitedKingdom">UnitedKingdom</option>
<option value="UnitedStates">UnitedStates</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="VaticanCity">VaticanCity</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Vietnam</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>
        <button class='update-artefact-button' type = "submit" id="button">Update Artefact</button><br></br>
        <br></br>
      </form>
    </div>

        </>
    )

}
export default ArtefactPage;