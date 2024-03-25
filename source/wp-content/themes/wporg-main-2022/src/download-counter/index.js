/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import metadata from './block.json';

function Edit() {
	const [ count, setCount ] = useState( '1,000,000' );
	useEffect( () => {
		async function fetchCount() {
			const realCount = await apiFetch( { path: '/wporg/v1/core-downloads/' } );
			setCount( realCount );
		}
		fetchCount();
	}, [] );

	return <div { ...useBlockProps() }>{ count }</div>;
}

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
} );
