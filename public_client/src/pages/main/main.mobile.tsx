import colors from '../../_lib/colors';
import Header from '../../components/headers/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMobile(){
    return (
        <>
            <Header />
            <div className='container'>
                <img className='center-image'/>
                <div className='category'>
                    <nav className='nav'>
                        <ul>
                            <li>전자기기</li>
                            <li>생황용품</li>
                            <li>애완용품</li>
                            <li>주방용품</li>
                            <li>가구</li>
                            <li>뷰티용품</li>
                            <li>맛집</li>
                        </ul>
                    </nav>
                    
                    {/* '인기'의 선별기준? */}
                    <section className='hot-influ'>
                        <h3>인기 인플루언서</h3>
                        <div className='slide-wrap'>
                            <div className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <Link to='/BilliRecords'>
                                    <div>빌리 레코즈</div>
                                </Link>
                            </div>
                            <div className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>숏박스</div>
                            </div>
                            <div className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>백종원</div>
                            </div>
                            <div className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>코스모지나</div>
                            </div>
                        </div>
                    </section>

                    <section className='hot-post'>
                        <h3>인기 게시물</h3>
                        <div className='slide-wrap'>
                            <div className='post-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                                <div>누워서 듣기 좋은 음악 편안하고 산뜻한 R&B 1시간 | Lazy</div>
                            </div>
                        </div>
                        <div className='slide-wrap'>
                            <div className='post-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                                <div>누워서 듣기 좋은 음악 편안하고 산뜻한 R&B 1시간 | Lazy</div>
                            </div>
                        </div>
                    </section>

                    <section className='hot-product'>
                        <h3>인기 제품</h3>
                        <div className='slide-wrap'>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='event'>
                        <h3>이벤트</h3>
                    </section>
                </div>
            </div>

        </>
    );
}