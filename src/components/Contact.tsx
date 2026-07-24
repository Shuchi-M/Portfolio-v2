import { asset } from '../assetPath';

export default function Contact() {
  return (
    <footer id="contact" className="max-w-[900px] mx-auto px-6 pb-20">
      <div className="bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-6 shadow-lg">
        <h2 className="font-heading mb-3">
          📨 Send a Message <span className="inline-block ml-2 text-xl"></span>
        </h2>
        <p className="mb-1.5">
          Every good adventure needs allies. Reach out — I'm always open to new quests.
        </p>
        <p className="mb-1.5">
          <strong>Email:</strong>{' '}
          <a href="mailto:shuchimishra@umass.edu" className="text-panelBorder font-bold hover:text-textDark">
            shuchimishra@umass.edu
          </a>
        </p>
        <p className="mb-1.5">
          <strong>LinkedIn:</strong>{' '}
          
           <a href="https://linkedin.com/in/shuchi-mishra-ks"
            target="_blank"
            rel="noreferrer"
            className="text-panelBorder font-bold hover:text-textDark"
          >
            linkedin.com/in/shuchi-mishra-ks
          </a>
        </p>
        <p className="mb-1.5">
          <strong>GitHub:</strong>{' '}
          
          <a  href="https://github.com/Shuchi-M"
            target="_blank"
            rel="noreferrer"
            className="text-panelBorder font-bold hover:text-textDark"
          >
            github.com/Shuchi-M
          </a>
        </p>
        <p className="mb-0">
          <a href={asset('resume.pdf')} download className="text-panelBorder font-bold hover:text-textDark">
            📄 Download Resume
          </a>
        </p>
      </div>
    </footer>
  );
}