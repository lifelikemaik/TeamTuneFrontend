import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Landing page for invited user
 * @param {props} props
 */
function PrivacyPolicy(props) {
    return (
        <div>
                <p>The German version is legally binding.</p>
            <h1>Datenschutzerklärung</h1>
            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
            <p>Maik Luu Bach
                Portiastr. 19
                    81545 München</p>
            <h2>Ihre Betroffenenrechte</h2>
            <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
            <ul>
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
            </ul>
            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
            <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.</p>
            <p></p><p> Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine  Zuordnung  des aufrufenden Clients nicht mehr möglich ist.</p>
            <p></p><h2>Registrierung auf unserer Website</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>Für die Registrierung auf unserer Website benötigen wir einige personenbezogene Daten, die über eine Eingabemaske an uns übermittelt werden. </p>
            <p>Zum Zeitpunkt der Registrierung werden zusätzlich folgende Daten erhoben:</p>
            <p>IP-Adresse, Zeitstempel, Spotify Informationen</p>
            <p>Ihre Registrierung ist für das Bereithalten bestimmter Inhalte und Leistungen auf unserer Website erforderlich.</p>
            <h3>Rechtsgrundlage:</h3>
            <p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).</p>
            <h3>Empfänger:</h3>
            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.</p>
            <p></p><h3>Speicherdauer:</h3>
            <p>Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt. </p>
            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte gewähren. </p>
            <p></p><h2>Erbringung kostenpflichtiger Leistungen</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung ausführen zu können.</p>
            <h3>Rechtsgrundlage:</h3>
            <p>Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.</p>
            <h3>Empfänger:</h3>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <p></p><h3>Speicherdauer:</h3>
            <p>Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.</p>
            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.</p>
            <p></p>
            <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
            <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
            <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
            <p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
            <h3>Empfänger eines Widerspruchs</h3>
            <p></p>
            <h2>Änderung unserer Datenschutzbestimmungen</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
            <h2>Fragen an den Datenschutzbeauftragten</h2>
            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
            <p></p><p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em></p>

        </div>
    );
}

export default withRouter(PrivacyPolicy);
