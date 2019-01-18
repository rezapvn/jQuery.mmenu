Mmenu.addons.navbars.next = function( 
	this	: Mmenu,
	navbar	: HTMLElement
) {
	//	Add content
	var next = Mmenu.DOM.create( 'a.mm-btn.mm-btn_next.mm-navbar__btn' );
	navbar.append( next );


	//	Update to opened panel
	var org : HTMLElement;
	var _url, _txt;


	this.bind( 'openPanel:start', (
		panel : HTMLElement
	) => {
		org = panel.querySelector( '.' + this.conf.classNames.navbars.panelNext );

		_url = org ? org.getAttribute( 'href' ) : '';
		_txt = org ? org.innerHTML : '';

		if ( _url )
		{
			next.setAttribute( 'href', _url );
		}
		else
		{
			next.removeAttribute( 'href' );
		}
		
		next.classList[ _url || _txt ? 'remove' : 'add' ]( 'mm-hidden' );
		next.innerHTML = _txt;
	});


	//	Add screenreader / aria support
	this.bind( 'openPanel:start:sr-aria', (
		panel : HTMLElement
	) => {
		Mmenu.sr_aria( next, 'hidden', next.matches( 'mm-hidden' ) );
		Mmenu.sr_aria( next, 'owns', ( next.getAttribute( 'href' ) || '' ).slice( 1 ) );
	});
};

Mmenu.configs.classNames.navbars.panelNext = 'Next';
