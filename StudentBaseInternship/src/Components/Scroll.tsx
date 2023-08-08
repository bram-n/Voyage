import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
    border: "1px solid green",
    margin: 12,
    padding: 8
};

const Scroll = () => {
    const [hasMore, setHasMore] = useState(true);
    const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));

    const fetchMoreData = () => {
        if (dataSource.length < 200) {
            setTimeout(() => {
                setDataSource(prevData => prevData.concat(Array.from({ length: 20 })));
            }, 500);
        } else {
            setHasMore(false);
        }
    };

    return (
        <div className="Scroll">
            <InfiniteScroll
                dataLength={dataSource.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
            >
                {dataSource.map((item, index) => (
                    <div key={index} style={style}> This is a div #{index + 1} inside </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Scroll;
