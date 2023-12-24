import React, { Component } from 'react';

export class UserDetailPage extends Component {
    static displayName = UserDetailPage.name;
  
    render() {
        return (
            <form>
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="given_name" class="col-form-label">Voornaam</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="given_name" class="form-control" placeholder="Voornaam" />
                    </div>
                </div>

                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="infix" class="col-form-label">Tussenvoegsel</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="infix" class="form-control" placeholder="Tussenvoegsel" />
                    </div>

                    <div class="col-2">
                        <label for="family_name" class="col-form-label">Achternaam</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="family_name" class="form-control" placeholder="Achternaam" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="street_name" class="col-form-label">Straatnaam</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="street_name" class="form-control" placeholder="Straatnaam" />
                    </div>
                    
                    <div class="col-2">
                        <label for="house_number" class="col-form-label">Huisnummer</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="house_number" class="form-control" placeholder="Huisnummer" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="zip_code" class="col-form-label">Postcode</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="zip_code" class="form-control" placeholder="Postcode" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="phone_number" class="col-form-label">Telefoonnummer</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="phone_number" class="form-control" placeholder="Telefoonnummer" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="age" class="col-form-label">Leeftijd</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="age" class="form-control" placeholder="Leeftijd" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="email_address" class="col-form-label">Emailadres</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="email_address" class="form-control" placeholder="Emailadres" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="condition" class="col-form-label">Aandoening</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="condition" class="form-control" placeholder="Aandoening" />
                    </div>
                </div>
                
                <div class="row row-offset-top">
                    <div class="col-2">
                        <label for="assistive_technologies" class="col-form-label">Hulpmiddelen</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="assistive_technologies" class="form-control" placeholder="Hulpmiddelen" />
                    </div>
                </div>

                <div class="row row-offset-top">
                    <div class="col-2">
                        <label>Dagen beschikbaar</label>
                    </div>

                    <div class="col-auto">
                        <input type="checkbox" class="btn-check" id="btn_datepicker_monday" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btn_datepicker_monday">Maandag</label>
                    </div>
                    <div class="col-auto">
                        <input type="checkbox" class="btn-check" id="btn_datepicker_tuesday" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btn_datepicker_tuesday">Dinsdag</label>
                    </div>
                    <div class="col-auto">
                        <input type="checkbox" class="btn-check" id="btn_datepicker_wednesday" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btn_datepicker_wednesday">Woensdag</label>
                    </div>
                    <div class="col-auto">
                        <input type="checkbox" class="btn-check" id="btn_datepicker_thursday" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btn_datepicker_thursday">Donderdag</label>
                    </div>
                    <div class="col-auto">
                        <input type="checkbox" class="btn-check" id="btn_datepicker_friday" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btn_datepicker_friday">Vrijdag</label>
                    </div>
                </div>

                <div class="row row-offset-top">
                    <div class="col-auto">
                        <button class="btn btn-primary" type="alter_data">Wijzigen</button>
                    </div>
                    <div class="col-auto">
                    <button class="btn btn-primary" type="save_data">Opslaan</button>
                    </div>

                </div>

            </form>
        )
    }
}