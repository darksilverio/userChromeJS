::2016.03.31

:Plugins&Software-2
cls
::�O�Â���ļ�·���Լ��ļ���

::���˽�Q&��̖
set TempName="Plugins&Software"

::�������ں͕r�g
set tm1=%time:~0,2%
set tm2=%time:~3,2%
set tm3=%time:~6,2%
set tm4=%time:~0,8%
set da1=%date:~0,4%
set da2=%date:~5,2%
set da3=%date:~8,2%
set Name=%TempName%_%da1%%da2%%da3%-%tm1%%tm2%%tm3%.7z

::С�r��С��10��r������
set /a tm1=%time:~0,2%*1
if %tm1% LSS 10 set tm1=0%tm1%
set Name=%TempName%_%da1%%da2%%da3%-%tm1%%tm2%%tm3%.7z

rem �_ʼ���
::-mx9����ѹ�� -mhc���������ļ�ͷѹ�� -r�ݹ鵽���е���Ŀ¼
%zip% -mx9 -mhc -r u -up1q3r2x2y2z2w2 %TargetFolder%\%Name% "%TempFolder%\Plugins" "%TempFolder%\Software"
::move %TargetFolder%\%Name% %TargetFolder3%

@echo �����ɣ����h���R�r�ļ��A��
rd "%TempFolder%" /s/q
