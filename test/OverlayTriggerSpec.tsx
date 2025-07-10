import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import OverlayTrigger from '../src/OverlayTrigger';
import Popover from '../src/Popover';

describe('<OverlayTrigger>', () => {
  // Swallow extra props.
  const TemplateDiv = React.forwardRef(
    ({ className = '', children }: any, ref: any) => (
      <div
        ref={ref}
        className={className}
        role="tooltip"
        id="test-tooltip"
        data-testid="test-overlay"
      >
        {children}
      </div>
    ),
  );

  it('should not throw an error with StrictMode', () => {
    render(
      <React.StrictMode>
        <OverlayTrigger overlay={<TemplateDiv>test</TemplateDiv>}>
          <button type="button" data-testid="test-button">
            button
          </button>
        </OverlayTrigger>
      </React.StrictMode>,
    );
    const buttonElem = screen.getByTestId('test-button');
    fireEvent.click(buttonElem);
  });

  it('Should render OverlayTrigger element', () => {
    render(
      <OverlayTrigger overlay={<TemplateDiv>test</TemplateDiv>}>
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    const buttonElem = screen.getByTestId('test-button');
    expect(buttonElem).toBeDefined();
  });

  it('Should show after click trigger', () => {
    render(
      <OverlayTrigger trigger="click" overlay={<TemplateDiv />}>
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    let overlayElem = screen.queryByTestId('test-overlay');
    const buttonElem = screen.getByTestId('test-button');

    expect(overlayElem).toBeNull();
    fireEvent.click(buttonElem);

    overlayElem = screen.queryByTestId('test-overlay');
    expect(overlayElem).not.toBeNull();
  });

  it('Should accept a function as an overlay render prop', () => {
    const overlay = () => <TemplateDiv />;
    render(
      <OverlayTrigger trigger="click" overlay={overlay}>
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    let overlayElem = screen.queryByTestId('test-overlay');
    const buttonElem = screen.getByTestId('test-button');

    expect(overlayElem).toBeNull();

    fireEvent.click(buttonElem);

    overlayElem = screen.queryByTestId('test-overlay');
    expect(overlayElem).not.toBeNull();
  });

  it('Should show the tooltip when transitions are disabled', () => {
    const overlay = ({ className }: any) => (
      <TemplateDiv className={`${className} test`} />
    );
    render(
      <OverlayTrigger
        transition={false}
        trigger={['hover', 'focus']}
        overlay={overlay}
      >
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    let overlayElem = screen.queryByTestId('test-overlay');
    const buttonElem = screen.getByTestId('test-button');

    expect(overlayElem).toBeNull();

    fireEvent.focus(buttonElem);

    overlayElem = screen.queryByTestId('test-overlay');
    expect(overlayElem).not.toBeNull();

    expect(overlayElem!.classList).toContain('show');
  });

  it('Should call OverlayTrigger onClick prop to child', () => {
    const callback = vi.fn();

    render(
      <OverlayTrigger overlay={<TemplateDiv>test</TemplateDiv>} trigger="click">
        <button type="button" onClick={callback} data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    const buttonElem = screen.getByTestId('test-button');
    fireEvent.click(buttonElem);

    expect(callback).toHaveBeenCalled();
  });

  it('Should show after mouseover trigger', async () => {
    render(
      <OverlayTrigger overlay={<TemplateDiv />}>
        <span data-testid="test-hover">hover me</span>
      </OverlayTrigger>,
    );
    const overlayElem = screen.queryByTestId('test-overlay');
    const hoverElem = screen.getByTestId('test-hover');

    expect(overlayElem).toBeNull();

    fireEvent.mouseOver(hoverElem);

    await waitFor(() =>
      expect(screen.queryByTestId('test-overlay')).not.toBeNull(),
    );

    fireEvent.mouseOut(hoverElem);

    await waitFor(() =>
      expect(screen.queryByTestId('test-overlay')).toBeNull(),
    );
  });

  it('Should not set aria-describedby if the state is not show', () => {
    render(
      <OverlayTrigger trigger="click" overlay={<TemplateDiv />}>
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    const buttonElem = screen.getByTestId('test-button');

    expect(buttonElem.getAttribute('aria-describedby')).toBeNull();
  });

  it('Should set aria-describedby for tooltips if the state is show', async () => {
    render(
      <OverlayTrigger trigger="click" overlay={<TemplateDiv />}>
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    const buttonElem = screen.getByTestId('test-button');

    fireEvent.click(buttonElem);

    // aria-describedby gets assigned after a slight delay
    await waitFor(() =>
      expect(buttonElem.getAttribute('aria-describedby')).toBeDefined(),
    );

    expect(buttonElem.getAttribute('aria-describedby')).toEqual('test-tooltip');
  });

  it('Should keep trigger handlers', () => {
    const onClickSpy = vi.fn();
    render(
      <div>
        <OverlayTrigger
          trigger="click"
          overlay={<TemplateDiv>test</TemplateDiv>}
        >
          <button type="button" data-testid="test-button" onClick={onClickSpy}>
            button
          </button>
        </OverlayTrigger>
        <input id="target" />
      </div>,
    );

    fireEvent.click(screen.getByTestId('test-button'));

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('Should maintain overlay classname', () => {
    render(
      <OverlayTrigger
        trigger="click"
        overlay={<TemplateDiv className="test-overlay">test</TemplateDiv>}
      >
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );
    const buttonElem = screen.getByTestId('test-button');
    fireEvent.click(buttonElem);

    const overlayElem = screen.queryByTestId('test-overlay');
    expect(overlayElem).not.toBeNull();
    expect(overlayElem!.classList).toContain('test-overlay');
  });

  it('Should pass transition callbacks to Transition', async () => {
    const increment = vi.fn();
    const onEnteredSpy = vi.fn();
    const onExitedSpy = vi.fn();

    render(
      <OverlayTrigger
        trigger="click"
        overlay={<TemplateDiv>test</TemplateDiv>}
        onExit={increment}
        onExiting={increment}
        onExited={onExitedSpy}
        onEnter={increment}
        onEntering={increment}
        onEntered={onEnteredSpy}
      >
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );

    fireEvent.click(screen.getByTestId('test-button'));

    await screen.findByTestId('test-overlay');

    await waitFor(() => expect(onEnteredSpy).toHaveBeenCalledOnce());

    fireEvent.click(screen.getByTestId('test-button'));

    await waitForElementToBeRemoved(() => screen.getByTestId('test-overlay'));

    await waitFor(() => expect(onExitedSpy).toHaveBeenCalledOnce());
    expect(increment).toHaveBeenCalledTimes(4);
  });

  it('Should handle popover trigger without warnings', async () => {
    render(
      <OverlayTrigger
        trigger="click"
        overlay={
          <Popover id="test-popover" data-testid="test-overlay">
            test
          </Popover>
        }
      >
        <button type="button" data-testid="test-button">
          button
        </button>
      </OverlayTrigger>,
    );

    const buttonElem = screen.getByTestId('test-button');
    fireEvent.click(buttonElem);

    const overlay = await screen.findByTestId('test-overlay');
    expect(overlay).toBeDefined();
  });
});
