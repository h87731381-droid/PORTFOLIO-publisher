import './App.css';
import './portfolio.scss';
import React, { useEffect, useRef, useState } from 'react';
import popup from './json/popup.json'
import projectList from './json/projectList.json';



function App() {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const projectRef = useRef(null);
  const [copied, setCopied] = useState(false);

  /* 새로고침시 스크롤 최상단 */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* 팝업열리면 스크롤 방지 */
  useEffect(() => {
    document.body.style.overflow = (show ? 'hidden' : 'auto');
  }, [show]);

  /* 카드 애니메이션 (한번만 실행) */
  useEffect(() => {
    const elObserve = document.querySelectorAll('.card');
    let callback = function (entries, observe) {
      entries.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add('active');
          observe.unobserve(item.target);
        }
      })
    }
    let ob = new IntersectionObserver(callback);
    elObserve.forEach(function (item) {
      ob.observe(item);
    })

  }, []);

  /* 이메일 복사 */
  const copyEmail = async (e) => {
    e.preventDefault(); // 링크 기본 새로고침 막기
    try {
      await navigator.clipboard.writeText("h87731381@gmail.com");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.log("복사 실패:", err);
    }
  };

  /* 상단 스크롤 버튼 */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* 프로젝트 스크롤 버튼 */
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <div className='main'>
        <h1>안녕하세요, 웹 퍼블리셔<br></br> <span>이현주</span> 입니다.</h1>
        <p>화면의 완성도뿐 아니라, 사용자가 망설임 없이 이해하고 사용할 수 있는 직관적인 구조와 흐름을 만드는 데 집중하고 있습니다.</p>
      </div>
      <div className='link'>
        <a className='linkBtn' href='./이현주_이력서_.pdf' download='웹퍼블리셔_이현주_이력서.pdf'>
          <p>이력서 다운로드</p>
          <img src='/images/line-md_external-link-rounded.svg' alt="이력서 다운로드" />
        </a>

        <a className='linkBtn' href="https://github.com/h87731381-droid" target="_blank">
          <figure className='githugImg'>
            <img src='/images/garden_github-fill-12.svg' alt="깃허브" />
            <p>GitHub</p>
          </figure>
          <img src='/images/line-md_external-link-rounded.svg' alt="GitHub" />
        </a>
      </div>

      <img className='scroll' src='/images/bottom_arrow.svg' alt="스크롤" />

      <div className='about'>
        <div className='title'>
          <b>About me</b>
          <p>사용성을 고민하고 협업하며, 완성도 높은 웹 개발을 지향합니다.</p>
        </div>
        <div className='aboutContent'>
          <figure className='content1 card'>
            <img src='/images/hugeicons_orange.svg' alt="협업" />
            <div className='aboutNote'>
              <b>함께 만드는 협업</b>
              <figcaption>팀원들과 적극적으로 의견을 나누며 더 나은 방향을 함께 고민합니다. 맡은 역할에 책임감을 가지고 협업하며, 완성도 높은 결과물을 만드는 과정을 중요하게 생각합니다.</figcaption>
            </div>
          </figure>
          <figure className='content2 card'>
            <img src='/images/hugeicons_orange-1.svg' alt="사용성" />
            <div className='aboutNote'>
              <b>사용자 중심 UI/UX</b>
              <figcaption>사용자의 흐름과 경험을 고려한 마크업과 인터랙션을 고민합니다. 보기 좋은 화면을 넘어, 누구나 편하게 사용할 수 있는 웹을 만드는 것을 목표로 합니다.</figcaption>
            </div>
          </figure>
          <figure className='content3 card'>
            <img src='/images/hugeicons_orange-2.svg' alt="퍼블리싱" />
            <div className='aboutNote'>
              <b>완성도를 높이는 퍼블리싱</b>
              <figcaption>반응형 웹, 웹 접근성, 유지보수를 고려한 구조적인 코드를 지향합니다. 디테일한 구현과 안정적인 퍼블리싱으로 높은 완성도의 결과물을 만들어갑니다.</figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className='skillTool'>
        <div className='title'>
          <b>Skills</b>
          <p>프로젝트에 사용한 경험이 있는 기술들입니다.</p>
        </div>
        <div className='stack card'>
          <div className='tool'>
            <b>HTML5</b>
            <span>기본적인 태그를 사용하여 마크업을 할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>CSS3</b>
            <span>스타일명령을 사용하여 레이아웃과 디자인을 할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>JavaScript</b>
            <span>바닐라문법을 사용하여 동적인 기능을 구현할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>jQuery</b>
            <span>jQuery를 사용해 DOM조작과 이벤트를 처리한 경험이 있습니다.</span>
          </div>
          <div className='tool'>
            <b>React</b>
            <span>유지보수를 위해 컴포넌트를 분리하고 관리할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>Figma</b>
            <span>피그마를 사용하여 컴포넌트와 간단한 애니메이션, 스토리보드를 제작할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>Photoshop</b>
            <span>편집도구를 활용하여 이미지를 편집하고 디자인할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>Illustrator</b>
            <span>디자인 툴을 활용하여 해상도 높은 일러스트를 만들 수 있습니다. </span>
          </div>
          <div className='tool'>
            <b>GitHub</b>
            <span>깃허브를 활용하여 팀/개인 프로젝트를 관리할 수 있습니다.</span>
          </div>
          <div className='tool'>
            <b>Git</b>
            <span>로컬 환경에서 코드의 변경 이력을 기록하고 관리한 경험이 있습니다.</span>
          </div>
          <div className='tool'>
            <b>Vercel</b>
            <span>프로젝트를 배포하고 관리한 경험이 있습니다.</span>
          </div>
          <div className='tool'>
            <b>MongoDB</b>
            <span>기본적인 데이터 구조를 이해하고 데이터를 관리한 경험이 있습니다.</span>
          </div>
        </div>
      </div>

      <div className='title' ref={projectRef}>
        <b>Project</b>
        <p>협업 및 단독 작업을 통해 퍼블리싱 구현 능력을 높였습니다.</p>
      </div>

      <div className='projects'>
        {projectList.map((pjList) => {
          return (
            <figure className='project card' key={pjList.id}>
              <button onClick={() => { setShow(true); setSelectedId(pjList.id); }}><img src={pjList.photo} /></button>
              <div className='projectContent'>
                <b>{pjList.name}</b>
                <figcaption>{pjList.description}</figcaption>
                <ul className='skills'>
                  {pjList.type.map((type) => {
                    return (
                      <li>{type}</li>
                    )
                  })}
                </ul>
              </div>
            </figure>

          )
        })}
      </div>

      <div className='contact'>
        <p className='card'><b>퍼블리셔</b>로서 함께 <b>성장</b>할 기회를 기대하며,<br></br> 연락 주시면 <b>성실히 답변</b>드리겠습니다.</p>
        <div className='profile card'>
          <figure className='profileNote'>
            <img src='/images/iconamoon_profile.svg' alt="프로필" />
            <figcaption>이현주 LEE HYUN JU</figcaption>
          </figure>
          <figure className='profileNote'>
            <img src='/images/material-symbols_mail-outline.svg' alt="이메일" />
            <a href="mailto:h87731381@gmail.com" onClick={copyEmail}>h87731381@gmail.com</a>
          </figure>
          <figure className='profileNote'>
            <img src='/images/line-md_github.svg' alt="깃허브" />
            <a href="https://github.com/h87731381-droid" target="_blank" rel="noopener noreferrer">GitHub-hyunju</a>
          </figure>
        </div>
        <div className='bottombutn card'>
          <button className='control' onClick={scrollToTop}>
            <span>Top</span>
            <img src='/images/glyphs_arrow-bold.svg' alt="맨위로" />
          </button>
          <button className='control' onClick={scrollToProject}>
            <span>Project</span>
            <img src='/images/glyphs_arrow-bold.svg' alt="프로젝트바로가기" />
          </button>
        </div>
      </div>
      {copied && <div className="toast">이메일이 복사되었습니다</div>}
      <Popup setShow={setShow} show={show} selectedId={selectedId} />
    </div>
  );
}

export default App;


function Popup({ show, setShow, selectedId }) {

  const pj = popup.find(
    project => String(project.id) === String(selectedId)
  );

  return (
    <>
      {show &&
        <div className='popup'>
          <img className='X' src="/images/meteor-icons_xmark.svg" onClick={() => setShow(false)} />
          <div className='popup_back'>
            <div className='X_back'>
              <div key={pj.id}>
                <div className='ppp_title'>
                  <div className='ppp_title_github'>
                    <h1>{pj.title}</h1>
                    <a href={pj.github} target="_blank" rel="noopener noreferrer"><img src="/images/github.svg" alt="" /></a>
                  </div>
                  <img className='ppp_img' src={pj.img} alt="" />
                </div>
                <div className='ppp_data'>
                  <div className='ppp_note'>
                    <div className='ppp_numDate'>
                      <div className='ppp_number'>
                        <b>참여 인원</b>
                        <p>{pj.number}</p>
                      </div>
                      <div className='ppp_date'>
                        <b>기간</b>
                        <p>{pj.date}</p>
                      </div>
                    </div>
                    <div className='ppp_tool'>
                      <b>기술 스택</b>
                      <div className='ppp_toolname' >
                        {pj.tool.map((pjt, i) => {
                          return (
                            <p className='tool' key={i}>{pjt}</p>
                          )
                        })}

                      </div>
                    </div>
                    <div className='ppp_url'>
                      <div className='ppp_link'>
                        <b>배포 URL</b>
                        <a href={pj.url} target="_blank" rel="noopener noreferrer"><img src="/images/tabler_external-link.svg" alt="" /></a>
                      </div>
                      <a className='ppp_linkURL' href={pj.url} target="_blank" rel="noopener noreferrer"><p>{pj.url}</p></a>
                    </div>

                  </div>
                  <div className='ppp_text'>
                    <b>프로젝트 상세 내용</b>
                    <p>{pj.detail}</p>
                  </div>
                  <div className='ppp_text'>
                    <b>작품 내 역할</b>
                    <p>{pj.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}