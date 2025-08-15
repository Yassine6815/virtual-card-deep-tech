// Script to wire contact links, maps link, and status badge
(function(){
	'use strict';

	const emailLink = document.getElementById('emailLink');
	const whatsappLink = document.getElementById('whatsappLink');
	const facebookLink = document.getElementById('facebookLink');
	const phoneLink = document.getElementById('phoneLink');
	const mapsLink = document.getElementById('mapsLink');
	const openBadge = document.getElementById('openBadge');

	// Default contact values — change these from HTML or via the exposed API
	const contacts = {
		email: 'deeptech333@gmail.com', // replace with your email
		emailSubject: 'Hello from Deep Tech',
		emailBody: 'السلام عليكم',
		whatsappText: 'السلام عليكم',
		facebookUrl: 'https://www.facebook.com/deeptech333',
		phone: '+213666498480', // normalized tel value
		phoneDisplay: 'Call | إتصل' // human-friendly display
	};

	function encode(s){ return encodeURIComponent(s); }

	// Build links only when the target elements exist
	if (emailLink) {
		emailLink.href = `mailto:${contacts.email}?subject=${encode(contacts.emailSubject)}&body=${encode(contacts.emailBody)}`;
		emailLink.setAttribute('rel','noopener noreferrer');
	}

	if (whatsappLink) {
		whatsappLink.href = `https://wa.me/+213666498480?text=${encode(contacts.whatsappText)}`;
		whatsappLink.setAttribute('rel','noopener noreferrer');
	}

		if (phoneLink) {
			// Use tel: link for mobile devices. Use normalized contacts.phone (no spaces) for href
			phoneLink.href = `tel:${contacts.phone}`;
			// If the link text should show a human-friendly format, update innerText if present
			const span = phoneLink.querySelector('span');
			if (span) span.textContent = contacts.phoneDisplay || contacts.phone;
		}

	// Maps link (static URL from author)
	if (mapsLink) {
		mapsLink.href = 'https://maps.app.goo.gl/aaJ1qNazQYAXY1aC8?g_st=aw';
		mapsLink.setAttribute('target','_blank');
		mapsLink.setAttribute('rel','noopener noreferrer');
	}

	if (facebookLink) {
		facebookLink.href = contacts.facebookUrl;
		facebookLink.setAttribute('target','_blank');
		facebookLink.setAttribute('rel','noopener noreferrer');
	}

	function renderStatus(){
		if (!openBadge) return;
		const isOpen = document.body.getAttribute('data-open') === 'true';
		openBadge.textContent = isOpen ? 'Open | مفتوح' : 'Closed | مغلق';
		openBadge.classList.toggle('badge-open', isOpen);
		openBadge.classList.toggle('badge-closed', !isOpen);
		openBadge.setAttribute('aria-live', 'polite');
	}

	// Small runtime API for future admin toggles or dynamic updates
	window.deepTech = window.deepTech || {};
	window.deepTech.setOpen = function(open){
		document.body.setAttribute('data-open', open ? 'true' : 'false');
		renderStatus();
	};

	window.deepTech.updateContacts = function(newContacts){
		Object.assign(contacts, newContacts || {});
		if (emailLink) emailLink.href = `mailto:${contacts.email}?subject=${encode(contacts.emailSubject)}&body=${encode(contacts.emailBody)}`;
		if (whatsappLink) whatsappLink.href = `https://wa.me/+213666498480?text=${encode(contacts.whatsappText)}`;
		if (facebookLink) facebookLink.href = contacts.facebookUrl;
		if (phoneLink) {
			phoneLink.href = `tel:${contacts.phone}`;
			const span = phoneLink.querySelector('span');
			if (span) span.textContent = contacts.phoneDisplay || contacts.phone;
		}
	};
	// Default initialization: if page author didn't set data-open, assume open
	if (!document.body.hasAttribute('data-open')) document.body.setAttribute('data-open','true');
	renderStatus();

})();

