::2017.02.13

@echo off

::�Զ��Թ���Ա�������bat�ļ�
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::���ݲ��ֿ�ʼ
Title �����̎�����ϰ� by Cing
::�����С��ColsΪ��LinesΪ��
MODE con: COLS=80 LINES=25
cd /d %~dp0
::�O��ģ�K·��
::����ǰĿ¼���浽����b��,�Ⱥ�ǰ��Ҫ�пո�
set b=%cd%

::һ��������7-zip�����ַ
::set zip="%b%\7za.exe"
set zip="D:\Program Files\7-Zip\7z.exe"

::�O���R�r�ļ��A
set TempFolder="E:\Temp"

::�O��ݔ���ļ��A
set TargetFolder="E:"

::�O��Profiles�ς���ַ
set TargetFolder1="E:\My Documents\JianguoYun\Cingͬ��\Firefox\Profiles\"
::�O��CingFox�ς���ַ
::set TargetFolder2="E:\My Documents\Baiduyun\Cingͬ��\Firefox\FX����\CingFox\"
::�O��Plugins��Software�ς���ַ
::set TargetFolder3="E:\My Documents\Baiduyun\Cingͬ��\Firefox\Plugins&Software\"

:menu
cls
ECHO.
ECHO  �����̎�����ϰ�                           
ECHO.
ECHO  1�����Firefox�����ļ��A
ECHO  2��CingFox����������
ECHO  3�����Plugins��Software�ļ��A
ECHO  4�����һЩ�ļ���GitHub
ECHO  5��ͬ��GitHub�O���ļ�������
ECHO.
set /p a=�����������Ų��س���1��2����
cls

if %a%==1 goto Profiles
if %a%==2 goto CingFox
if %a%==3 goto Plugins&Software
if %a%==4 goto GitHub
if %a%==5 goto Sync

:Profiles
cls
@echo off
CALL "%b%\Modules\Profiles-1.bat"
CALL "%b%\Modules\Profiles-2.bat"
@echo.
Goto end

:CingFox
cls
@echo off
CALL "%b%\Modules\Profiles-1.bat"
CALL "%b%\Modules\Plugins&Software-1.bat"
CALL "%b%\Modules\CingFox-3.bat"
CALL "%b%\Modules\CingFox-4.bat"
@echo.
Goto end

:Plugins&Software
cls
@echo off
CALL "%b%\Modules\Plugins&Software-1.bat"
CALL "%b%\Modules\Plugins&Software-2.bat"
@echo.
Goto end

:GitHub
cls
@echo off
CALL "%b%\Modules\GitHub.bat"
@echo.
Goto end

:Sync
cls
@echo off
CALL "%b%\Modules\Sync.bat"
@echo.
Goto end

:end
cls
ECHO.&ECHO.�����! �������I���ز˵���&PAUSE >NUL 2>NUL
goto menu

