import React, { Component } from 'react';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Navigation from './components/Navigation';
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import i18n from './i18next';
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

function App () {
		const{ t, i18n } = useTranslation();
		function handleClick(lang){
			i18n.changeLanguage(lang);
		}
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Row middle="xs" center="xs" start="lg">
							<Col xs={12} lg={8}>
								<Img sizeX="102px" />
							</Col>
							<Col xs={12} lg={4}>
								<Navigation />
							</Col>
						</Row>
					</Grid>
				</Header>
				<button onClick={()=>handleClick('en')}>
					english
				</button>
				<button onClick={()=>handleClick('ch')}>
					latin
				</button>
		<p>{t('Thanks.1')}</p>
				<Content />
				<Footer />
			</React.Fragment>
		);
		}


export default App;
