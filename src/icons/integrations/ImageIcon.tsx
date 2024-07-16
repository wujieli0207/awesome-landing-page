import type { JSX } from "solid-js";

export default function ImageIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
	return (
		<svg
			width="33"
			height="32"
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M25.9987 2.66675H7.33203C6.27117 2.66675 5.25375 3.08818 4.5036 3.83832C3.75346 4.58847 3.33203 5.60588 3.33203 6.66675V25.3334C3.33203 26.3943 3.75346 27.4117 4.5036 28.1618C5.25375 28.912 6.27117 29.3334 7.33203 29.3334H25.9987C26.218 29.3304 26.4366 29.3081 26.652 29.2667L27.052 29.1734H27.1454H27.212L27.7054 28.9867L27.8787 28.8934C28.012 28.8134 28.1587 28.7467 28.292 28.6534C28.4701 28.5224 28.6393 28.3799 28.7987 28.2267L28.892 28.1067C29.0229 27.9741 29.1433 27.8314 29.252 27.6801L29.372 27.5067C29.4652 27.3583 29.5455 27.2022 29.612 27.0401C29.6486 26.9761 29.6798 26.9092 29.7054 26.8401C29.772 26.6801 29.812 26.5067 29.8654 26.3334V26.1334C29.941 25.8729 29.9857 25.6044 29.9987 25.3334V6.66675C29.9987 5.60588 29.5773 4.58847 28.8271 3.83832C28.077 3.08818 27.0596 2.66675 25.9987 2.66675ZM7.33203 26.6667C6.97841 26.6667 6.63927 26.5263 6.38922 26.2762C6.13917 26.0262 5.9987 25.687 5.9987 25.3334V19.5867L10.3854 15.1867C10.5093 15.0618 10.6568 14.9626 10.8193 14.8949C10.9817 14.8272 11.156 14.7924 11.332 14.7924C11.508 14.7924 11.6823 14.8272 11.8448 14.8949C12.0073 14.9626 12.1547 15.0618 12.2787 15.1867L23.7454 26.6667H7.33203ZM27.332 25.3334C27.3308 25.4978 27.2991 25.6605 27.2387 25.8134C27.2082 25.8784 27.1726 25.9408 27.132 26.0001C27.0964 26.0565 27.0562 26.11 27.012 26.1601L19.8787 19.0267L21.052 17.8534C21.176 17.7284 21.3235 17.6293 21.4859 17.5616C21.6484 17.4939 21.8227 17.459 21.9987 17.459C22.1747 17.459 22.349 17.4939 22.5115 17.5616C22.6739 17.6293 22.8214 17.7284 22.9454 17.8534V17.8534L27.332 22.2534V25.3334ZM27.332 18.4801L24.8254 16.0001C24.0623 15.2761 23.0506 14.8725 21.9987 14.8725C20.9468 14.8725 19.9351 15.2761 19.172 16.0001L17.9987 17.1734L14.1587 13.3334C13.3957 12.6094 12.3839 12.2058 11.332 12.2058C10.2802 12.2058 9.2684 12.6094 8.50536 13.3334L5.9987 15.8134V6.66675C5.9987 6.31313 6.13917 5.97399 6.38922 5.72394C6.63927 5.47389 6.97841 5.33341 7.33203 5.33341H25.9987C26.3523 5.33341 26.6915 5.47389 26.9415 5.72394C27.1916 5.97399 27.332 6.31313 27.332 6.66675V18.4801Z"
				fill="currentColor"
			/>
		</svg>
	);
}
