                                    const animatedText = document.createElement('div');
                                    animatedText.textContent = 'Make an animation with JavaScript';
                                    animatedText.style.position = 'absolute';
                                    animatedText.style.fontSize = '24px';
                                    animatedText.style.fontFamily = 'Arial, sans-serif';
                                    animatedText.style.color = 'blue';

                                    document.body.appendChild(animatedText);

                                    function animateText() {
                                    const time = Date.now() * 0.002;
                                    const x = Math.sin(time) * 50;
                                    const y = Math.cos(time) * 20;

                                    animatedText.style.transform = `translate(${x}px, ${y}px)`;
                                    console.log('Make javascript animation');
                                    console.log('With Nada :3');
                                    requestAnimationFrame(animateText);
                                    }
                                    animateText();




