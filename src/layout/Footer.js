import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosHeart } from 'react-icons/io';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';

const Footer = () => (
	<Section backgroundColor='black'>
		<Grid>
			<Row center="xs">
				<Col xs={12}>
					<Paragraph color='white'>
						Made by Rafael Estrella
          </Paragraph>
				</Col>
			</Row>
		</Grid>
	</Section>
);

export default Footer;
