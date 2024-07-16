import type { JSX } from "solid-js";

export default function SearchFileIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15.9993 26.6667H6.66602C6.31239 26.6667 5.97326 26.5263 5.72321 26.2762C5.47316 26.0262 5.33268 25.687 5.33268 25.3334V6.66675C5.33268 6.31313 5.47316 5.97399 5.72321 5.72394C5.97326 5.47389 6.31239 5.33341 6.66602 5.33341H13.3327V9.33341C13.3327 10.3943 13.7541 11.4117 14.5043 12.1618C15.2544 12.912 16.2718 13.3334 17.3327 13.3334H21.3327V14.6667C21.3327 15.0204 21.4732 15.3595 21.7232 15.6096C21.9733 15.8596 22.3124 16.0001 22.666 16.0001C23.0196 16.0001 23.3588 15.8596 23.6088 15.6096C23.8589 15.3595 23.9993 15.0204 23.9993 14.6667V12.0001C23.9993 12.0001 23.9993 12.0001 23.9993 11.9201C23.9855 11.7976 23.9586 11.6769 23.9194 11.5601V11.4401C23.8552 11.303 23.7697 11.177 23.666 11.0667V11.0667L15.666 3.06675C15.5558 2.96304 15.4298 2.87752 15.2927 2.81341C15.2529 2.80776 15.2125 2.80776 15.1727 2.81341C15.0372 2.73574 14.8876 2.68587 14.7327 2.66675H6.66602C5.60515 2.66675 4.58773 3.08818 3.83759 3.83832C3.08744 4.58847 2.66602 5.60588 2.66602 6.66675V25.3334C2.66602 26.3943 3.08744 27.4117 3.83759 28.1618C4.58773 28.912 5.60515 29.3334 6.66602 29.3334H15.9993C16.353 29.3334 16.6921 29.1929 16.9422 28.9429C17.1922 28.6928 17.3327 28.3537 17.3327 28.0001C17.3327 27.6465 17.1922 27.3073 16.9422 27.0573C16.6921 26.8072 16.353 26.6667 15.9993 26.6667ZM15.9993 7.21341L19.4527 10.6667H17.3327C16.9791 10.6667 16.6399 10.5263 16.3899 10.2762C16.1398 10.0262 15.9993 9.68704 15.9993 9.33341V7.21341ZM9.33268 10.6667C8.97906 10.6667 8.63992 10.8072 8.38987 11.0573C8.13983 11.3073 7.99935 11.6465 7.99935 12.0001C7.99935 12.3537 8.13983 12.6928 8.38987 12.9429C8.63992 13.1929 8.97906 13.3334 9.33268 13.3334H10.666C11.0196 13.3334 11.3588 13.1929 11.6088 12.9429C11.8589 12.6928 11.9993 12.3537 11.9993 12.0001C11.9993 11.6465 11.8589 11.3073 11.6088 11.0573C11.3588 10.8072 11.0196 10.6667 10.666 10.6667H9.33268ZM28.946 27.0534L27.386 25.5067C27.8846 24.6364 28.0842 23.6266 27.9542 22.6321C27.8241 21.6375 27.3716 20.713 26.666 20.0001V20.0001C26.0167 19.3276 25.1799 18.8663 24.2647 18.6763C23.3495 18.4862 22.3982 18.5762 21.5349 18.9345C20.6715 19.2928 19.9361 19.9028 19.4244 20.685C18.9127 21.4673 18.6484 22.3855 18.666 23.3201C18.6614 24.1243 18.8672 24.9158 19.2628 25.616C19.6585 26.3162 20.2304 26.9008 20.9217 27.3118C21.613 27.7228 22.3997 27.946 23.2039 27.9591C24.008 27.9723 24.8016 27.7749 25.506 27.3868L27.0527 28.9467C27.1766 29.0717 27.3241 29.1709 27.4866 29.2386C27.6491 29.3063 27.8233 29.3411 27.9993 29.3411C28.1754 29.3411 28.3496 29.3063 28.5121 29.2386C28.6746 29.1709 28.8221 29.0717 28.946 28.9467C29.071 28.8228 29.1702 28.6753 29.2379 28.5129C29.3056 28.3504 29.3404 28.1761 29.3404 28.0001C29.3404 27.8241 29.3056 27.6498 29.2379 27.4873C29.1702 27.3248 29.071 27.1774 28.946 27.0534V27.0534ZM24.7194 24.7201C24.3385 25.0782 23.8354 25.2776 23.3127 25.2776C22.7899 25.2776 22.2868 25.0782 21.906 24.7201C21.539 24.3465 21.3331 23.8438 21.3327 23.3201C21.3299 23.0571 21.3805 22.7963 21.4813 22.5534C21.5821 22.3104 21.7312 22.0905 21.9194 21.9067C22.2748 21.5532 22.7515 21.3482 23.2527 21.3334C23.5222 21.3168 23.7923 21.3562 24.046 21.4489C24.2996 21.5417 24.5314 21.6858 24.7267 21.8724C24.922 22.0589 25.0766 22.2838 25.1809 22.5329C25.2852 22.782 25.3369 23.05 25.3327 23.3201C25.3217 23.8495 25.1011 24.353 24.7194 24.7201V24.7201ZM17.3327 16.0001H9.33268C8.97906 16.0001 8.63992 16.1406 8.38987 16.3906C8.13983 16.6407 7.99935 16.9798 7.99935 17.3334C7.99935 17.687 8.13983 18.0262 8.38987 18.2762C8.63992 18.5263 8.97906 18.6667 9.33268 18.6667H17.3327C17.6863 18.6667 18.0254 18.5263 18.2755 18.2762C18.5255 18.0262 18.666 17.687 18.666 17.3334C18.666 16.9798 18.5255 16.6407 18.2755 16.3906C18.0254 16.1406 17.6863 16.0001 17.3327 16.0001ZM14.666 24.0001C15.0196 24.0001 15.3588 23.8596 15.6088 23.6096C15.8589 23.3595 15.9993 23.0204 15.9993 22.6667C15.9993 22.3131 15.8589 21.974 15.6088 21.7239C15.3588 21.4739 15.0196 21.3334 14.666 21.3334H9.33268C8.97906 21.3334 8.63992 21.4739 8.38987 21.7239C8.13983 21.974 7.99935 22.3131 7.99935 22.6667C7.99935 23.0204 8.13983 23.3595 8.38987 23.6096C8.63992 23.8596 8.97906 24.0001 9.33268 24.0001H14.666Z"
				fill="currentColor"
			/>
		</svg>
	);
}
