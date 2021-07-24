import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Landing page for invited user
 * @param {props} props
 */
function Imprint(props) {
    return (
        <div>
            <p>Imprint, according to the German Telemedia Act (Telemediengesetz) &sect;5 Maik Luu Bach Portiastr. 19 81545 M&uuml;nchen</p>

            <p>Email: maik.luu-bach@tum.de</p>

            <p>Responsibility for the content of all other Internet pages lies with the author who produced or published the pages. If you have any questions about these webpages, please contact the individual named on the Internet page.</p>

            <p>The service is hosted locally by the individual named.</p>

            <p>Liability Disclaimer While TeamTune makes every effort to ensure that the contents of its website are correct, up-to-date, and without omissions, it cannot accept liability for the accuracy and quality of its website at any given time.</p>

            <p>The website provides hyperlinks to other external websites. The authors and distributors of these sites are responsible for their content. TeamTune is not liable for the content of external websites and has no influence on the content of external links. Despite carefully checking the contents when linking to external websites, the University has no liability for the content of external links. TeamTune distances itself expressly from the content of external websites, nor does it endorse it. </p>
        </div>
    );
}

export default withRouter(Imprint);
