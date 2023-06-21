import { SwiperOptions } from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperSlideProps } from 'swiper/react';

import { ReactNode, RefObject } from 'react';


/**
 * When you import Swiper custom elements from node modules, we need to manually register them.
 * It should be done only once and it registers Swiper custom elements globally.
 */
register();

type Kebab<T extends string, A extends string = ''> = T extends `${infer F}${infer R}`
	? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
	: A;

/**
 * Helper for converting object keys to kebab case because Swiper web components parameters are available as kebab-case attributes.
 * @link https://swiperjs.com/element#parameters-as-attributes
 */
type KebabObjectKeys<T> = {
	[key in keyof T as Kebab<key & string>]: T[key] extends Object ? KebabObjectKeys<T[key]> : T[key];
};

/**
 * Swiper 9 doesn't support Typescript yet, we are watching the following issue:
 * @link https://github.com/nolimits4web/swiper/issues/6466
 *
 * All parameters can be found on the following page:
 * @link https://swiperjs.com/swiper-api#parameters
 */

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': SwiperContainerAttributes;
			'swiper-slide': SwiperSlideAttributes;
		}

		interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
			ref?: RefObject<SwiperRef>;
			class?: string;
			children?: ReactNode;
		}
		interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {
			key: string | number;
		}
	}
}
