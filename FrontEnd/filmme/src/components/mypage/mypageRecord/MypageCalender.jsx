import React, { useState } from "react";
import * as S from "./style.jsx";
import MypageRecordModal from "./MypageRecordModal.jsx";

function MypageCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewingDate, setViewingDate] = useState(new Date(new Date().setFullYear(2024)));
    const [records, setRecords] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(true);
    const [currentRecord, setCurrentRecord] = useState({});

    const currentMonth = currentDate.getMonth() + 1;
    const viewingMonth = viewingDate.getMonth() + 1;
    const daysInMonth = new Date(viewingDate.getFullYear(), viewingMonth, 0).getDate();

    const handlePreviousMonth = () => {
        setViewingDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            if (newDate.getFullYear() < 2024) {
                newDate.setFullYear(2024);
            }
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setViewingDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            if (newDate.getFullYear() > 2024) {
                newDate.setFullYear(2024);
            }
            return newDate;
        });
    };

    const isCurrentMonth = currentMonth === viewingMonth && currentDate.getFullYear() === viewingDate.getFullYear();

    const handleAddRecord = (date, isCurrentMonth) => {
        if (!isCurrentMonth) {
            alert("기록할 수 있는 기간이 아닙니다.");
            return;
        }
        setSelectedDate(date);
        setIsAddMode(true);
        setCurrentRecord(records[date] || {});
        setIsModalOpen(true);
    };

    const handleViewRecord = (date) => {
        if (records[date]) {
            setSelectedDate(date);
            setIsAddMode(false);
            setCurrentRecord(records[date]);
            setIsModalOpen(true);
        } else {
            alert("그날의 기록이 없습니다.");
        }
    };

    const handleSaveRecord = (updatedRecords) => {
        setRecords(updatedRecords);
        setIsModalOpen(false);
    };

    return (
        <S.MyCinemaRecord>
            <S.CinemaRecordTitle>
                <S.Arrow onClick={handlePreviousMonth}>&lt;</S.Arrow>
                나의 <S.HighlightedText>{viewingMonth}월</S.HighlightedText> 영화 기록
                <S.Arrow onClick={handleNextMonth}>&gt;</S.Arrow>
            </S.CinemaRecordTitle>
            <S.OnlyThisMonth>현재 달만 기록할 수 있습니다.</S.OnlyThisMonth>
            <S.CinemaRecordGrid isCurrentMonth={isCurrentMonth}>
                {[...Array(daysInMonth)].map((_, i) => {
                    const date = `${viewingDate.getFullYear()}-${viewingMonth}-${i + 1}`;
                    const record = records[date] || {};
                    const backgroundImage = record.recordPhoto ? `url(${record.recordPhoto})` : 'none';
                    return (
                        <S.CinemaRecordCard key={i} isCurrentMonth={isCurrentMonth} onClick={() => handleViewRecord(date)} style={{ backgroundImage }}>
                            <S.DayNumber>{i + 1}</S.DayNumber>
                            {!records[date] && (
                                <S.AddButton
                                    onClick={(e) => { e.stopPropagation(); handleAddRecord(date, isCurrentMonth); }}
                                    isCurrentMonth={isCurrentMonth}
                                >
                                    +
                                </S.AddButton>
                            )}
                        </S.CinemaRecordCard>
                    );
                })}
            </S.CinemaRecordGrid>
            {isModalOpen && (
                <MypageRecordModal
                    isAddMode={isAddMode}
                    selectedDate={selectedDate}
                    records={records}
                    setRecords={setRecords}
                    currentRecord={currentRecord}
                    setCurrentRecord={setCurrentRecord}
                    handleSaveRecord={handleSaveRecord}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
        </S.MyCinemaRecord>
    );
}

export default MypageCalendar;
