import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {

    render() {
        return (
            <div class="mt-5 pt-5 pb-5 footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <h3>CookingRecipes</h3>

                        </div>

                        <div class="col-lg-4 col-xs-12 location">
                            <h4 class="mt-lg-0 mt-sm-4 ">Contact</h4>

                            <p><i class="fa fa-envelope-o mr-3"></i>cooking@recipes.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <p class=""><small class="text-black-50">© 2021. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;