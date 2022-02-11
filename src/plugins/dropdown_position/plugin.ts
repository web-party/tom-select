import { createPopper } from '@popperjs/core';
import TomSelect from '../../tom-select';
import MicroEvent from '../../contrib/microevent';

/**
 * Makes sure dropdown opens above the select element if not enough space is available below it.
 * Based on https://jsfiddle.net/ok56a0gu/
 */
export default function ensureVisibleDropdown(this: TomSelect & MicroEvent) {
	let popper: ReturnType<typeof createPopper>;

	this.on('initialize', () => {
		popper = createPopper(this.control, this.dropdown);
	});

	this.on('dropdown_open', async () => {
		await popper.update();
	});
}
