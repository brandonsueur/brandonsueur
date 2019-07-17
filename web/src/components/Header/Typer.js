import React from 'react';

class Typer extends React.Component {
  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 155
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const dataText = [
      'Designer',
      'Briocolo',
      'Amusant',
      'Sportif',
      'Freelance',
      'Curieux',
      'Passionné',
      'Geek',
      'Perspicace'
    ];
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 155
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    const { text } = this.state;
    return <span>{text}</span>;
  }
}

export default Typer;
