:Plugins&Software-1
cls

rem �O�Â��·���Լ��R�r�ļ��A
cd /d %~dp0
::������������λ�õ�Plugins��Software�ļ��A������5��
set BackDir2=..\..\..\..\..\

rem ����Ŀ���ļ����R�r�ļ��A

::�������ļ��A
::Plugins�����ñ�Я���
xcopy "%BackDir2%\Plugins" %TempFolder%\Plugins\  /s /y /i
::Software������ܛ��
xcopy "%BackDir2%\Software" %TempFolder%\Software\  /s /y /i

::��Ҫ�h������
del %TempFolder%\Plugins\sumatrapdfcache\  /s /q 
del %TempFolder%\Software\GFW\psiphon\psiphon3.exe.orig  /s /q 
del %TempFolder%\Software\GFW\GoGoTester\gogo_cache  /s /q 