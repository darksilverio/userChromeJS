::2017.08.08

::���

:Profiles-2
cls
::һЩ��չ���ô��, ����FXʱ��VimFx�Զ���װ���°�
::staged
move "%TempFolder%\Profiles\extensions\staged"  %TempFolder%
::playFlash
move "%TempFolder%\Profiles\extensions\playflash@xpi"  %TempFolder%


::�������ں͕r�g
set YY=%date:~0,4%
set MON=%date:~5,2%
set DD=%date:~8,2%
set hh=%time:~0,2%
set mm=%time:~3,2%
set ss=%time:~6,2%

::ݔ���ļ���
set Name=Profiles_%ver%_%YY%%MON%%DD%-%hh%%mm%%ss%.7z

::С�r��С��10��r������
set /a hh=%time:~0,2%*1
if %hh% LSS 10 set hh=0%hh%
::ݔ���ļ���
set Name=Profiles_%ver%_%YY%%MON%%DD%-%hh%%mm%%ss%.7z

rem �_ʼ���
::-mx9����ѹ�� -mhc���������ļ�ͷѹ�� -r�ݹ鵽���е���Ŀ¼
%zip% -mx9 -mhc -r u -up1q3r2x2y2z2w2 %TargetFolder%\%Name% "%TempFolder%\Profiles"
move %TargetFolder%\%Name% %TargetFolder1%

@echo �����ɣ����h���R�r�ļ��A��
rd "%TempFolder%" /s/q