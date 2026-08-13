
function whatsappForm(e, formId){
  e.preventDefault();
  const f=document.getElementById(formId);
  const data=new FormData(f);
  const text =
`Hello Skybond Travels, I want a travel quotation.

Name: ${data.get('name')||''}
Phone: ${data.get('phone')||''}
Destination: ${data.get('destination')||''}
Travel Date: ${data.get('date')||''}
Travellers: ${data.get('travellers')||''}
Requirements: ${data.get('message')||''}`;
  window.open('https://wa.me/919999573485?text='+encodeURIComponent(text),'_blank');
}
