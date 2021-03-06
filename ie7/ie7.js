/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-clock': '&#xe906;',
		'icon-circle': '&#xe907;',
		'icon-graduation-cap': '&#xe903;',
		'icon-mortar-board': '&#xe903;',
		'icon-heart': '&#xe904;',
		'icon-like': '&#xe904;',
		'icon-love': '&#xe904;',
		'icon-favorite': '&#xe904;',
		'icon-office': '&#xe905;',
		'icon-buildings': '&#xe905;',
		'icon-work': '&#xe905;',
		'icon-profile': '&#xe902;',
		'icon-file': '&#xe902;',
		'icon-document': '&#xe902;',
		'icon-page': '&#xe902;',
		'icon-user': '&#xe902;',
		'icon-paper': '&#xe902;',
		'icon-phone': '&#xe942;',
		'icon-link': '&#xe9cb;',
		'icon-github': '&#xeab0;',
		'icon-linkedin': '&#xeac9;',
		'icon-file-pdf': '&#xeadf;',
		'icon-codepen': '&#xeae8;',
		'icon-mail': '&#xe900;',
		'icon-email': '&#xe900;',
		'icon-letter': '&#xe900;',
		'icon-envelope': '&#xe900;',
		'icon-contact': '&#xe900;',
		'icon-location': '&#xe901;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
