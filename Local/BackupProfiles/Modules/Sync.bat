::2017.04.14

:Sync
cls
echo.
echo  *** ͬ��һЩܛ�����O���ļ� ***
echo.
echo  1. Foxmail�^�V����Ӧ�õ���������
echo  2. ProcessLasso�O��
echo  3. Listary�O��
echo.
echo  ���������������
pause>nul
cls

rem �O�Â��·���Լ��R�r�ļ��A
cd /d %~dp0

::�O���ļ�����λ��
::������������λ�õ�Profiles�ļ��У�������4��
set dir1=..\..\..\..
set dir2=E:\My Documents\GitHub\Customization

::ͬ��Foxmail Filter
taskkill /im foxmail.exe
xcopy "%dir2%\Foxmail-Filter\163.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupontjoy@163.com\Filter\1.fter" /s /y /i
xcopy "%dir2%\Foxmail-Filter\163.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupontjoy@qq.com\Filter\1.fter"  /s /y /i
xcopy "%dir2%\Foxmail-Filter\163.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupont2305@gmail.com\Filter\1.fter"  /s /y /i
xcopy "%dir2%\Foxmail-Filter\163.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupont@inc.tvc-tech.com\Filter\1.fter"  /s /y /i
start "" "%dir1%\..\..\Tencent\Foxmail\Storage\..\foxmail.exe" /min

::ͬ��ProcessLasso�O��
taskkill /im ProcessGovernor.exe
taskkill /im ProcessLasso.exe
xcopy "%dir2%\ProcessLasso\prolasso.ini" "%dir1%\..\..\System Tools\ProcessLassoPortable\prolasso.ini"  /s /y /i
start "" "%dir1%\..\..\System Tools\ProcessLassoPortable\ProcessGovernor.exe" "/logfolder=%dir1%\..\..\System Tools\ProcessLassoPortable" "/configfolder=%dir1%\..\..\System Tools\ProcessLassoPortable"
start "" "%dir1%\..\..\System Tools\ProcessLassoPortable\ProcessLasso.exe" "/logfolder=%dir1%\..\..\System Tools\ProcessLassoPortable" "/configfolder=%dir1%\..\..\System Tools\ProcessLassoPortable"

::ͬ��Listary�O��
taskkill /im Listary.exe
taskkill /im ListaryHelper64.exe
taskkill /im ListaryHookHelper32.exe
taskkill /im ListaryHookHelper64.exe
taskkill /im ListaryService.exe
del "%dir1%\..\Software\Listary Pro\UserData\DiskSearch.db"  /s /q
del "%dir1%\..\Software\Listary Pro\UserData\History_v2.sqlite"  /s /q
del "%dir1%\..\Software\Listary Pro\UserData\History_v2.sqlite-journal"  /s /q
del "%dir1%\..\Software\Listary Pro\UserData\listary_log.log"  /s /q
xcopy "%dir2%\Listary\Preferences.json" "%dir1%\..\Software\Listary Pro\UserData\Preferences.json"  /s /y /i
start "" "%dir1%\..\Software\Listary Pro\Listary.exe"