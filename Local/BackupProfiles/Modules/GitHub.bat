::2017.04.24

:GitHub
cls
echo.
echo  *** ���һЩ�ļ���GitHub ***
echo.
echo  1. Firefox�ļ���user.js, persdict.dat, stylish.sqlite
echo  2. Foxmail�^�V��
echo  3. ProcessLasso�O��
echo  4. TC�O��
echo  5. Listary�O��
echo  6. CCleaner�O��
echo  7. WindowTabs�O��
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

::��ݎׂ�Firefox�ļ�
xcopy "%dir1%\persdict.dat" "%dir2%\Firefox\persdict.dat"  /s /y /i
xcopy "%dir1%\stylish.sqlite" "%dir2%\Firefox\stylish.sqlite"  /s /y /i
xcopy "%dir1%\user.js" "%dir2%\Firefox\user.js"  /s /y /i
xcopy "%dir1%\Chrome\Local\_user.js" "%dir2%\Firefox\_user.js"  /s /y /i
::xcopy "%dir1%\Chrome\lib\_FeiRuoNetProxy.json" "%dir2%\Rules\Autoproxy\_FeiRuoNetProxy.json"  /s /y /i

::���Foxmail Filter
xcopy "%dir1%\..\..\Tencent\Foxmail\Storage\dupontjoy@163.com\Filter\1.fter" "%dir2%\Foxmail-Filter\163.com\1.fter"  /s /y /i

::���ProcessLasso�O��
xcopy "%dir1%\..\..\System Tools\ProcessLassoPortable\config\prolasso.ini" "%dir2%\ProcessLasso\config\prolasso.ini"  /s /y /i

::���PicPick�O��
xcopy "%dir1%\..\Software\PicPick\picpick.ini" "%dir2%\PicPick\picpick.ini"  /s /y /i

::���Total Commander�O��
xcopy "%dir1%\..\Software\totalcmd64\wincmd.ini" "%dir2%\TC\wincmd.ini"  /s /y /i
xcopy "%dir1%\..\Software\totalcmd64\user\user.ini" "%dir2%\TC\user.ini"  /s /y /i
xcopy "%dir1%\..\Software\totalcmd64\user\Default.bar" "%dir2%\TC\Default.bar"  /s /y /i
xcopy "%dir1%\..\Software\totalcmd64\user\Default.br2" "%dir2%\TC\Default.br2"  /s /y /i

::���Listary�O��
xcopy "%dir1%\..\Software\Listary Pro\UserData\Preferences.json" "%dir2%\Listary\Preferences.json"  /s /y /i

::���ShareX�O��
::xcopy "%dir1%\..\Software\ShareX\ShareX\ApplicationConfig.json" "%dir2%\ShareX\ApplicationConfig.json"  /s /y /i

::���CCleaner�O��
xcopy "%dir1%\..\..\System Tools\CCleaner\ccleaner.ini" "%dir2%\CCleaner\ccleaner.ini"  /s /y /i

::���WindowTabs�O��
xcopy "%dir1%\..\..\System Tools\WindowTabs\WindowTabsSettings.txt" "%dir2%\WindowTabs\WindowTabsSettings.txt"  /s /y /i