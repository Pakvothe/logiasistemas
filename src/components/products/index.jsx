import React, { useCallback, useEffect, useState } from 'react';
import { PrevButton, NextButton } from './Buttons';
import { products } from './products';

//Styles
import { StyledCarousel } from '../styles/styled_carousel';
import Fade from 'react-reveal/Fade';

//Embla
import { useEmblaCarousel } from 'embla-carousel/react';
import { useRecursiveTimeout } from './useRecursiveTimeout';
import { Link, useHistory } from 'react-router-dom';

const AUTOPLAY_INTERVAL = 8500;

const Products = () => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 5 });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const history = useHistory();

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on('select', onSelect);
		onSelect();
	}, [embla, onSelect]);

	const autoplay = useCallback(() => {
		if (!embla) return;
		if (embla.canScrollNext()) {
			embla.scrollNext();
		} else {
			embla.scrollTo(0);
		}
	}, [embla]);

	const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		embla.on('select', onSelect);
		embla.on('pointerDown', stop);
	}, [embla, onSelect, stop]);

	const handleSlideDown = (ev) => {
		let slide = ev.target;
		if (!slide.timerOn) {
			slide.timerOn = true;
			setTimeout(() => {
				slide.timerOn = false;
			}, 90);
		}
	};

	return (
		<StyledCarousel full={products ? false : true}>
			<Fade big>
				<div className='embla'>
					<div className='embla__viewport' ref={viewportRef}>
						<div className='embla__container'>
							{products &&
								products.map((prod) => (
									<div className='embla__slide' key={prod.id}>
										<div className='embla__slide__inner'>
											<img
												className='embla__slide__img'
												src={prod.image}
												alt={prod.title}
												onMouseDown={(ev) =>
													handleSlideDown(ev)
												}
											/>
											<div className='embla__slide__detail'>
												<div className='slide__details__left'>
													<h3 className='slide__title'>
														{prod.title}
													</h3>
													<p>{prod.info}</p>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
					<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
					<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
				</div>
			</Fade>
		</StyledCarousel>
	);
};
export default Products;
