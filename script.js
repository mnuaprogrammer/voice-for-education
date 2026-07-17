function copyMail(){let t=document.getElementById('mail');t.select();document.execCommand('copy');alert('Copied!');}

const emailBody = `Dear Hon'ble Minister,

I am writing as a concerned citizen to express my concern regarding the ongoing hunger strike by Mr. Sonam Wangchuk.

I respectfully urge the Government to engage in constructive dialogue with him and the concerned stakeholders at the earliest so that the issues raised can be addressed through peaceful and democratic means.

I am also concerned about the broader state of education in India. Many students and families continue to face challenges related to equitable access, quality of education, affordability, and the implementation of educational reforms.

In particular, I request continued efforts to strengthen the integrity, fairness, and transparency of national entrance examinations such as NEET.

Thank you for your time and consideration.

Yours sincerely,

A Concerned Citizen`;

function openDraft() {
    navigator.clipboard.writeText(emailBody).then(() => {
        const subject = encodeURIComponent("Request for Constructive Dialogue and Educational Reforms");

        const url =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=minister.sm@gov.in" +
            "&cc=secy.dhe@nic.in,secy.sel@nic.in" +
            "&su=" + subject;

        window.open(url, "_blank");

        alert("The email text has been copied to your clipboard.\n\nPaste it into Gmail using Ctrl+V (or Paste on mobile), then send.");
    });
}
