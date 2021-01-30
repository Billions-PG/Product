/* eslint-disable react/jsx-filename-extension */
/**
* @test-environment jsdom
*/
import 'jsdom-global/register';
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

import Photos from '../client/src/components/Photos';
import SelectedPhoto from '../client/src/components/SelectedPhoto';
import Sidebar from '../client/src/components/Sidebar';
import SidePhoto from '../client/src/components/SidePhoto';
import App from '../client/src/components/App';

// product = sizes: false, stock: 0
// productAlt = sizes: true, stock: >0
const { product } = require('./mockData');

describe('<App />', () => {
  it('Renders the App', () => {
    render(<App />);
  });
});

// Photos
describe('<Photos />', () => {
  const mock = jest.fn();

  beforeEach(() => {
    useParams.mockReturnValue({ prodId: '1' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderPhotos = () => render(<Photos
    changeSelectedImg={mock}
    images={product.images}
    selectedImg={product.images[0]}
  />);

  it('Renders the Photos component', () => {
    renderPhotos();
  });
});

// SidePhoto
describe('<SidePhoto />', () => {
  let mock;
  beforeAll(() => {
    mock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderSidePhoto = () => render(<SidePhoto
    changeSelectedImg={mock}
    image={product.images[0]}
  />);

  it('Renders the SidePhoto component', () => {
    renderSidePhoto();
  });
});

// SelectedPhoto
describe('<SelectedPhoto />', () => {
  it('Renders the SelectedPhoto component', () => {
    render(<SelectedPhoto
      selectedImg={product.images[0]}
    />);
  });
});

// Sidebar
describe('<Sidebar />', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ prodId: '1' });
  });

  const renderSidebar = () => render(<Sidebar />);

  it('Renders the Sidebar component', () => {
    renderSidebar();
  });

  it('Renders span with \'out of stock\' message at zero stock', () => {
    const { getByTestId } = renderSidebar();
    const stock = getByTestId('stock');
    expect(stock).toContainHTML('<span data-testid="stock">Out of stock</span>');
  });
});
